import React, { useState, useEffect } from "react";

export const AvatarUploader = ({ label, handleChange, orgData }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(orgData ? `${orgData}` : null);
  const handleUploadFile = (e) => {
    setImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
    handleChange(e.target.files[0]);
  };

  return (
    <>
      <div className="avatar-photo">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleUploadFile(e)}
        ></input>
        {!image && !orgData && (
          <div className="avatar-uploader-label">
            <span>{label}</span>
          </div>
        )}
        <img
          src={preview}
          className="rounded-circle"
          width="200"
          height="200"
        />
      </div>
    </>
  );
};
