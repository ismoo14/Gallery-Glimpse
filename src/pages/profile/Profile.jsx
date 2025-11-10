import "./profile.css";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { AuthContext } from "../../context/authContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Posts from "../../components/posts/Posts";
import { useParams } from "react-router-dom";
import Update from "../../components/update/Update";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";



const Profile = () => {
  const [ openUpdate, setOpenUpdate ] = useState(false)
  const { currentUser, logout} = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const isPlaceholderId = id === ':id'; 
  const profileUserId = isPlaceholderId ? currentUser.id : id;

  
  const { isLoading, error, data } = useQuery({
        queryKey: ["user", profileUserId], 
        queryFn: () =>
            makeRequest.get(`/users/find/${profileUserId}`).then((res) => {
                return res.data;
            }),
        enabled: !!profileUserId, 
    });


    if (isLoading) {
        return <p>Loading profile...</p>;
    }
    if (error) {
        console.error("Profile data fetch failed:", error); 
        return <p>Error loading profile data.</p>;
    }


  const handleLogout = async () => {
        await logout(); 
        navigate("/login"); 
    };
  return (
    <div className="profile">
      <div className="images">
        <img 
                    src={"/upload/"+data.coverPic} 
                    className="cover" 
                    alt="Cover" 
                />
      <img 
                    src={"/upload/"+data.profilePic} 
                    className="profilePic"  
                />
      </div>
      <div className="cont-info">
        <h2 className="name">{data.name}</h2>
        <h2 className="email">{data.email}</h2>
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="third">
    <button className="edit-btn" onClick={()=>setOpenUpdate(true)}>
        <EditOutlinedIcon sx={{ fontSize: '20px', marginRight: '5px' }}/>
        Edit Profile
    </button>
    <button className="logout-btn" onClick={handleLogout}>
        <LogoutOutlinedIcon sx={{ fontSize: '20px', marginRight: '5px' }}/>
        Logout
    </button>
</div>
          <div className="fourth">
            <div className="fourth-1">
              <button>Created</button>
            </div>
          </div>
        </div>
        <Posts userId={profileUserId} />
      </div>
      {openUpdate && data && <Update setOpenUpdate={setOpenUpdate} user={data}/>}
    </div>
  )
}

export default Profile