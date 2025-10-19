import { useState } from "react";
import "./upload.css";
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

const Upload = () => {
    const [isDragging, setIsDragging] = useState(false);
return (
    <div className="upload">
        <h2 className="upload-title">Create New</h2>
        <div 
        className={`upload-box ${isDragging ? 'dragging' : ''}`}>
        <input 
        type="file" id="file-upload" hidden 
        />
        <label htmlFor="file-upload" className="upload-label">
        <div className="upload-content">
            {/* Material-UI Icon */}
            <ImageOutlinedIcon sx={{ fontSize: 60, color: 'white' }} /> 
            
            <p className="drag-text">Drag images here or click to select files</p>
            <p className="recommendation-text">
            Recommendation: Use high-quality JPG, JPEG or PNG less than 3MB
            </p>
        </div>
        </label>
    </div>
    <div className="form-fields">
        <div className="title">
            <h2 className="title-1">Title</h2>
        <input type="text" id="title" placeholder="Title" className="input-field" />
        </div>

        <div className="description">
            <h2 className="description-1">Description</h2>
        <input type="text" id="title" placeholder="description" className="input-field" />
        </div>

        <div className="catagory">
            <h2 className="catagory-1">Select a Catagory</h2>
        <input type="text" id="title" placeholder="select a acatagory" className="input-field" />
        </div>

        <div className="cre">
            <button className="create-btn">Create</button>
        </div>
    </div>
    </div>
)
}

export default Upload