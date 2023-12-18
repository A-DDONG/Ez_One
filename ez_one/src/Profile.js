import React, { useState } from "react";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import Timeline from "./Timeline";
import ProfileImagePopup from "./ProfileImagePopup";
import TimelinePopup from "./TimelinePopup";

function Profile() {
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [showTimelinePopup, setShowTimelinePopup] = useState(false);
  const [image, setImage] = useState(null); // 이미지 상태 추가

  return (
    <div className="profile">
      <ProfileImage image={image} />
      <p class="pro_name">홍길동 사원</p>
      <ProfileInfo />
      <Timeline />
      <p className="pro_btn">
        <button onClick={() => setShowProfilePopup(true)}>사진 변경</button>
        <button onClick={() => setShowTimelinePopup(true)}>추가</button>
      </p>
      {showProfilePopup && (
        <ProfileImagePopup
          onClose={() => setShowProfilePopup(false)}
          setImage={setImage} // 이미지 변경 함수 전달
        />
      )}
      {showTimelinePopup && (
        <TimelinePopup onClose={() => setShowTimelinePopup(false)} />
      )}
    </div>
  );
}

export default Profile;
