import { useState } from "react";
import "./upload.css";
import {makeRequest} from "../../axios"
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";

const Upload = ({ closeModal }) => {
    const [file, setFile] = useState(null)
    const [desc, setDesc]= useState("")
    const [title, setTitle] = useState("")
    const [previewUrl, setPreviewUrl] = useState(null);

    const navigate = useNavigate();
    

    const upload = async () =>{
        try{
            const formData = new FormData();
            formData.append("file", file)
            const res = await makeRequest.post("/upload", formData)
            return res.data
        }catch(err){
            console.log(err);
        }
    }

    const queryClient = useQueryClient()
    const mutation = useMutation({ 
    mutationFn: (newPost) => {
        return makeRequest.post("/posts", newPost);
    },
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["posts"] });
        setFile(null);
        setDesc("");
        setTitle("");
        setPreviewUrl(null);

        navigate("/");
    },
});

    const handleClick = async (e) => {
        e.preventDefault()
        let imgUrl = "";
        if(file) imgUrl = await upload()
    mutation.mutate({title, desc, img: imgUrl});
    };

    const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    
    if (selectedFile) {
        setFile(selectedFile); 
        const objectUrl = URL.createObjectURL(selectedFile);
        setPreviewUrl(objectUrl);
    } else {
        setFile(null);
        setPreviewUrl(null);
    }
};


return (
    <div className="upload">
        <h2 className="upload-title">Create New</h2>
        <div>
        <input 
        type="file" id="file-upload" hidden onChange={handleFileChange}
        />
        <label htmlFor="file-upload" className="upload-label">
            {previewUrl ? (
                <img 
                    src={previewUrl}
                    alt="uploaded photo of user" 
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        position: 'absolute', 
                        top: 0, 
                        left: 0 
                    }} 
                />
            ) : (
        <div className="upload-content">
            <ImageOutlinedIcon sx={{ fontSize: 60, color: 'white' }} /> 
            
            <p className="drag-text">Click to select files</p>
            <p className="recommendation-text">
            Recommendation: Use high-quality JPG, JPEG or PNG less than 3MB
            </p>
        </div>
        )}
        </label>
    </div>
    <div className="form-fields">
        <div className="title">
            <h2 className="title-1">Title</h2>
        <input type="text" id="title" placeholder="Title" className="input-field" onChange={e=>setTitle(e.target.value)} value={title} />
        </div>

        <div className="description">
            <h2 className="description-1">Description</h2>
        <input type="text" id="title" placeholder="description" className="input-field" onChange={e=>setDesc(e.target.value)} value={desc}/>
        </div>

        <div className="cre">
            <button className="create-btn" type="button" onClick={handleClick}>Create</button>
        </div>
    </div>
    </div>
)
}

export default Upload