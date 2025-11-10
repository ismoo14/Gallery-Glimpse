import Post from "../post/Post"
import "./posts.css"
import { useQuery } from "@tanstack/react-query"
import { makeRequest } from "../../axios"

const Posts = ({ userId, isProfile }) => {
    
    const { isLoading, error, data } = useQuery({
        queryKey: ["posts", userId], 
        queryFn: () =>
            makeRequest.get(`/posts${userId ? "?userId=" + userId : ""}`).then((res) => {
                return res.data;
            }),
    });


return (
<div className="posts">
    {error ? "something went wrong" : isLoading ? "loading" : data.map((post) =>
        <Post post={post} 
                key={post.id} 
                isProfile={isProfile}/>
    )}
    </div>
    )
}

export default Posts