import "./navbar.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout(); 
        navigate("/login"); 
    };
return (
    <div className='navbar'>
        <div className="left">
            <Link to="/" className="home-tablet-btn"> 
                    <HomeOutlinedIcon sx={{ fontSize: '28px', backgroundColor: '#171c26', color: "white", padding: '4px 12px',  borderRadius: '5px'}}/>
                </Link>
            <input type="text" placeholder="Search" />
            <SearchOutlinedIcon sx={{ fontSize: '30px', backgroundColor: '#171c26', color: "white", padding: '4px 12px',  borderRadius: '5px'}}/>
        </div>
        <div className="right">
            <div className="user">
                <Link to="/profile/:id">
                <img 
        src={currentUser.profilePic 
        ? "/upload/" + currentUser.profilePic 
        : "/path/to/default/pfp.jpg"}
                        alt="User Profile" 
                        />
                </Link>
            </div>
            <Link to="/upload/:id">
            <AddOutlinedIcon  sx={{ fontSize: '28px', backgroundColor: '#171c26', color: "white", padding: '4px 12px',  borderRadius: '5px'}}/>
            </Link>
            <LogoutOutlinedIcon onClick={handleLogout}  sx={{ fontSize: '28px', backgroundColor: '#171c26', color: "white", padding: '4px 12px',  borderRadius: '5px', cursor: 'pointer'}}/>
        </div>
    </div>
)
}

export default Navbar