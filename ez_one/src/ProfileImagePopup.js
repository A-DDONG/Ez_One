import React, { useState, useRef } from "react";

function ProfileImagePopup({ onClose, setImage }) {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(); // ref 생성

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // 미리보기 설정
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirm = () => {
    setImage(preview); // 최종 이미지 설정
    onClose();
  };

  const handleDeleteImage = () => {
    setPreview(null);
    fileInputRef.current.value = "";
  };

  return (
    <div id="profile_layerpop">
      <div className="layerpop_cont">
        <h3>프로필 이미지 변경</h3>
        <div className="layer_proimg">
          <div className="imagepre_wrap">
            <p id="imagePreview">
              {preview && <img src={preview} alt="Preview" />}
            </p>
            <div className="imagepre_btn">
              <label htmlFor="imageInput" className="image-upload-label">
                프로필 업로드
              </label>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                style={{ display: "none" }}
                id="imageInput"
              />
              {preview && (
                <button className="dele" onClick={handleDeleteImage}>
                  이미지 삭제
                </button>
              )}
            </div>
          </div>
        </div>
        <p className="layer_btn">
          <button className="close" onClick={onClose}>
            취소
          </button>
          <button onClick={handleConfirm}>확인</button>
        </p>
      </div>
    </div>
  );
}

export default ProfileImagePopup;
