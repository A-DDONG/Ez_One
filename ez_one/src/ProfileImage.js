import React from "react";

function ProfileImage({ image }) {
  return (
    <div className="profile-image">
      {image && <img src={image} alt="Preview" />}
    </div>
  );
}

export default ProfileImage;
