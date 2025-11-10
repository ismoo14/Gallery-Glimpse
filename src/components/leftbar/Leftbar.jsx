import "./leftbar.css";
import car from "../../assets/cars.jpg"
import cat from "../../assets/cats.jpg"
import dog from "../../assets/dogs.jpg"
import food from "../../assets/food.jpg"
import nature from "../../assets/nature.jpg"
import photo from "../../assets/photos.jpg"
import quote from "../../assets/quotes.jpg"
import travel from "../../assets/travel.jpg"
import wallpaper from "../../assets/wallpaper.jpg"
import website from "../../assets/websites.jpg"
import art from "../../assets/art (2).jpg"
import fitness from "../../assets/fitness.jpg"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

const Leftbar = () => {
    const { currentUser } = useContext(AuthContext)

    const PUBLIC_FOLDER_BASE = "/upload/";
return (
    <div className='leftbar'>
        <div className="container">
            <div className="menu">
                <span className="gall">Gallery Glimpse</span>
                <div className="item1">
                    <Link to="/">
                    <HomeOutlinedIcon sx={{ fontSize: '25px', color: 'white'}}/>
                    </Link>
                    <Link to="/">
                    <span>Home</span>
                    </Link>
                </div>

                <span className="cata">Catagories</span>

                <div className="item">
                    <img src={car} alt="" />
                    <span>Cars</span>
                </div>

                <div className="item">
                    <img src={fitness} alt="" />
                    <span>fitness</span>
                </div>

                <div className="item">
                    <img src={wallpaper} alt="" />
                    <span>wallpapers</span>
                </div>

                <div className="item">
                    <img src={website} alt="" />
                    <span>websites</span>
                </div>

                <div className="item">
                    <img src={photo} alt="" />
                    <span>photos</span>
                </div>

                <div className="item">
                    <img src={food} alt="" />
                    <span>foods</span>
                </div>

                <div className="item">
                    <img src={nature} alt="" />
                    <span>nature</span>
                </div>

                <div className="item">
                    <img src={art} alt="" />
                    <span>arts</span>
                </div>

                <div className="item">
                    <img src={travel} alt="" />
                    <span>travel</span>
                </div>

                <div className="item">
                    <img src={quote} alt="" />
                    <span>quotes</span>
                </div>

                <div className="item">
                    <img src={cat} alt="" />
                    <span>cats</span>
                </div>

                <div className="item">
                    <img src={dog} alt="" />
                    <span>dogs</span>
                </div>

                <div className="user" style={{backgroundColor: "rgb(100, 99, 99)", marginTop: "10px", textDecoration: "none", padding: "2px 13px"}}>
                <Link to="/profile/:id">
                <img 
        src={currentUser.profilePic 
        ? "/upload/" + currentUser.profilePic 
        : "/path/to/default/pfp.jpg"}
                        alt="User Profile" 
                            />
                </Link>
                <Link to="/profile/:id">
                <span>{currentUser.name}</span>
                </Link>
            </div>
            </div>
        </div>
    </div>
)
}

export default Leftbar