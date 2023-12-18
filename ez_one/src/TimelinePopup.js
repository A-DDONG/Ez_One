import React from "react";

function TimelinePopup({ onClose }) {
  // 타임라인 팝업의 로직
  // 여기에 필요한 상태 및 함수를 추가하세요.

  return (
    <div id="timeline_layerpop">
      <div className="layerpop_cont">
        <h3>타임라인 수정</h3>
        {/* 타임라인 관련 내용 */}
        <p className="layer_btn">
          <button className="close" onClick={onClose}>
            취소
          </button>
          <button>확인</button>
        </p>
      </div>
    </div>
  );
}

export default TimelinePopup;
