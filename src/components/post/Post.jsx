import "./post.css"
import { Link } from "react-router-dom";

const Post = ({post, isProfile}) => {

const imageUrl = post.img 
        ? process.env.PUBLIC_URL + "/upload/" + post.img 
        : "path/to/default/placeholder.jpg";

    if (isProfile) {
        return (
            <div className="profile-post-item"> 
                <Link to={`/detail/${post.id}`}>
                    <img 
                        src={imageUrl} 
                        alt={post.title || "User Post"} 
                        className="profile-post-image" 
                    />
                </Link>
            </div>
        );
    }
    
    return (
        <div className="post-wrapper-container">
            <div className="post">
                <Link to={`/detail/${post.id}`} className="post-image-link">
                    <img 
                        src={imageUrl} 
                        className="post-image-feed"
                        alt={post.title || "Post Image"}
                    />
                </Link>
                
                <div className="user-info">
                    <div className="username-display">
                        <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
                            {post.name} 
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Post;
