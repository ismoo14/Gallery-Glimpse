import "./profile.css";
import wallpaper from "../../assets/wallpaper.jpg"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';




const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src={wallpaper} className="cover" alt="" />
        <img src="https://images.pexels.com/photos/2033933/pexels-photo-2033933.jpeg" className="profilePic" alt="" />
      </div>
      <div className="cont-info">
        <h2 className="name">ismail</h2>
        <h2 className="email">Demoaccount@gmail.com</h2>
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="third">
    <button className="edit-btn">
        <EditOutlinedIcon sx={{ fontSize: '20px', marginRight: '5px' }}/>
        Edit Profile
    </button>
    <button className="logout-btn">
        <LogoutOutlinedIcon sx={{ fontSize: '20px', marginRight: '5px' }}/>
        Logout
    </button>
    <button className="delete-btn"> 
        <DeleteForeverOutlinedIcon sx={{ fontSize: '20px', marginRight: '5px' }}/>
        Delete Account
    </button>
</div>
          <div className="fourth">
            <div className="fourth-1">
              <button>Created</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile