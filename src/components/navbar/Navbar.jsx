import "./navbar.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { currentUser } = useContext(AuthContext)
return (
    <div className='navbar'>
        <div className="left">
            <input type="text" placeholder="Search" />
            <SearchOutlinedIcon sx={{ fontSize: '30px', backgroundColor: '#171c26', color: "white", padding: '4px 12px',  borderRadius: '5px'}}/>
        </div>
        <div className="right">
            <div className="user">
                <Link to="/profile/:id">
                <img src={currentUser.profilePic}alt="" />
                </Link>
            </div>
            <Link to="/upload/:id">
            <AddOutlinedIcon  sx={{ fontSize: '28px', backgroundColor: '#171c26', color: "white", padding: '4px 12px',  borderRadius: '5px'}}/>
            </Link>
            <LogoutOutlinedIcon  sx={{ fontSize: '28px', backgroundColor: '#171c26', color: "white", padding: '4px 12px',  borderRadius: '5px'}}/>
        </div>
    </div>
)
}

export default Navbar