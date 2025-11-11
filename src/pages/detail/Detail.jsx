import "./detail.css";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query"; 
import { makeRequest } from "../../axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const Detail = () => {
const { currentUser } = useContext(AuthContext)
const { id } = useParams();
const queryClient = useQueryClient();
const navigate = useNavigate();

const isPostIdValid = !!id;

const deleteMutation = useMutation({
        mutationFn: () => {
            return makeRequest.delete(`/posts/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] }); 
            
            queryClient.invalidateQueries({ queryKey: ['post', id] }); 
            navigate('/'); 
        },
        onError: (error) => {
            console.error("Failed to delete post:", error);
            alert("Failed to delete post. Check console for details.");
        }
    });

    const handleDelete = () =>  {
            deleteMutation.mutate();
    };

const { isLoading, error, data: post } = useQuery({
        queryKey: ['post', id], 
        queryFn: () => 
            makeRequest.get(`/posts/${id}`).then((res) => {
                return res.data[0]; 
            }),
            enabled: isPostIdValid,
    });

    if (!isPostIdValid) {
    return <div className="detail-error">Error: Post ID is missing from the URL.</div>;
}

    if (isLoading) return <div className="detail-loading">Loading post details...</div>;
    if (error) return <div className="detail-error">Error: Could not load this post.</div>;
    if (!post) return <div className="detail-not-found">Post not found.</div>;

return (
    <div className="detail">
        <div className="container">
            <div className="firist">
                <img 
                    src={process.env.PUBLIC_URL + "/upload/" + post.img} 
                    className="wall-img" 
                    alt={post.title} 
                />
            </div>

            <div className="second">
                <h1>{post.title}</h1>
                <h3>{post.desc}</h3> 
                
                <div className="user">
                <div className="profile-cont">
                    <Link to={`/profile/${post.userId}`}>
                        <img 
        src={currentUser.profilePic 
        ? "/upload/" + currentUser.profilePic 
        : "/path/to/default/pfp.jpg"}
                        alt="User Profile" 
                        /> 
                    </Link>
                </div>
                <div className="info-cont">
                    <Link to={`/profile/${post.userId}`}> 
                        <p className="name">{post.name}</p> 
                        <p className="email">{post.email || 'user-email@example.com'}</p>
                    </Link>
                </div>
                </div>

                <div className="second-btn">
                {currentUser.id === post.userId && (
                        <>
                            <button className="delete" onClick={handleDelete}>
                                <DeleteForeverOutlinedIcon sx={{ fontSize: '20px', marginRight: '5px' }}/>
                                Delete
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    </div>
)
}

export default Detail