import { useState, useContext } from "react";
import "./update.css";
import { makeRequest } from "../../axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../../context/authContext";


const Update = ({setOpenUpdate, user}) => {
    const [cover, setCover] = useState(null)
    const [profile, setProfile] = useState(null)
    const [texts, setTexts] = useState({
        name: user.name,
    })

    const upload = async (file) => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            const res = await makeRequest.post("/upload", formData)
            return res.data;
        }catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setTexts((prev) => ({ ...prev, [e.target.name]: e.target.value })); 
    }

    const { updateCurrentUser } = useContext(AuthContext);
    const queryClient = useQueryClient();

const mutation = useMutation({ 
    mutationFn: (user) => {
        return makeRequest.put("/users", user);
    },
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["user"] });

        makeRequest.get(`/users/find/${user.id}`).then((res) => {
            updateCurrentUser(res.data);
        });

        setOpenUpdate(false); 
    },
});

    const handleClick = async (e) => {
    e.preventDefault()
    let coverUrl;
    let profileUrl;

    coverUrl = cover ? await upload(cover) : user.coverPic;
    profileUrl = profile ? await upload(profile) : user.profilePic;

    mutation.mutate({ 
        ...texts,
        coverPic: coverUrl, 
        profilePic: profileUrl
    });
};
    
return (
    <div className="update">
        <form>
            <input type="file" placeholder="Cover picture" onChange={e=>setCover(e.target.files[0])}/>
            <input type="file" placeholder="Profile picture" onChange={e=>setProfile(e.target.files[0])}/>
            <input type="text" name="name" onChange={handleChange} value={texts.name} placeholder="Update Name"/>
            <button onClick={handleClick}>Update</button>
            <button onClick={()=>setOpenUpdate(false)} className="close-button">X</button>
        </form>
    </div>
)
}

export default Update