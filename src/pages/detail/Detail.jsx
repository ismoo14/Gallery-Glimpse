import "./detail.css";
import wallpaper from "../../assets/wallpaper.jpg"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const Detail = () => {
const { currentUser } = useContext(AuthContext)
return (
    <div className="detail">
        <div className="container">
            <div className="firist">
                <img src={wallpaper} className="wall-img" alt="" />
            </div>

            <div className="second">
                <h1>Wallpaper</h1>
                <h3>Photo Wallpaper</h3>
                <div className="user">
                <div className="profile-cont">
                    <Link to="/">
                <img src={currentUser.profilePic}alt="" />
                </Link>
                </div>
                <div className="info-cont">
                    <Link to="/">
                <p className="name">{currentUser.name}</p>
                <p className="email">{currentUser.email}</p>
                </Link>
                </div>
                </div>

                <div className="second-btn">
                    
                    <button className="edit">
                        <EditOutlinedIcon sx={{ fontSize: '20px', marginRight: '5px' }} />
                        Edit
                        </button>
                    <button className="delete">
                        <DeleteForeverOutlinedIcon sx={{ fontSize: '20px', marginRight: '5px' }}/>
                        Delete
                        </button>
                </div>
            </div>
        </div>
    </div>
)
}

export default Detail