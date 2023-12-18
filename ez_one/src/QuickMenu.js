import React from "react";
import logo from "./images/logo.png";

function QuickMenu({ workDuration }) {
  return (
    <div id="quick_menu">
      <h3 className="logo_title">
        <img src={logo} alt="이지원 기업인사관리" />
      </h3>
      <p className="name_wel">
        <span>홍길동</span>님 반갑습니다!
      </p>
      <p className="date">
        근무 기간: {workDuration ? workDuration : "정보를 입력하세요"}
      </p>
    </div>
  );
}

export default QuickMenu;
