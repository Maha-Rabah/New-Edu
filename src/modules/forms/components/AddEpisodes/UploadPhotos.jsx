import React, { useState } from 'react';
import './addepisodes.css';


const UploadPhotos = () => {
    const [images, setImages] = useState([]);

    const handleImageChange = (e) => {
        const selectedImages = Array.from(e.target.files);
        setImages(selectedImages);
    };

    return (
        <div className="uploadPhotos">
            <label htmlFor="file-upload" className="fileLabel">Upload Photos</label>
            <input
                type="file"
                id="file-upload"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="fileInput"
            />

            <div className="imagePreview">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={URL.createObjectURL(image)}
                        alt={`Uploaded ${index}`}
                        className="previewImage"
                    />
                ))}
            </div>
        </div>
    );
};

export default UploadPhotos;
