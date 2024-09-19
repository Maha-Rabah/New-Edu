import React from 'react';
import './addmemebers.css';

function UploadPhoto() {
  return (
    <div className="formColumn">
      <div className="uploadSection">
        <label htmlFor="photoUpload" className="uploadLabel">Photo</label>
        <input
          type="file"
          id="photoUpload"
          accept="image/*"
          className="visually-hidden"
          aria-label="Upload photo"
        />
        <label htmlFor="photoUpload" className="uploadButton">
          UPLOAD PHOTO
        </label>
      </div>
    </div>
  );
}

export default UploadPhoto;
