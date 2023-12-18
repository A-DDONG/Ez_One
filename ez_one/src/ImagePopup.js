import React, { useState } from "react";

function ImagePopup({ onClose }) {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setImagePreview(null);
  };

  return (
    <div id="layerpop">
      <div className="layerpop_cont">
        <h3>프로필 이미지 변경</h3>
        <div className="layer_proimg">
          {imagePreview && <img src={imagePreview} alt="Preview" />}
          <input type="file" onChange={handleImageChange} accept="image/*" />
          {imagePreview && (
            <button onClick={handleDeleteImage}>이미지 삭제</button>
          )}
        </div>
        <p className="layer_btn">
          <button onClick={onClose}>취소</button>
          <button>확인</button>
        </p>
      </div>
    </div>
  );
}

export default ImagePopup;
