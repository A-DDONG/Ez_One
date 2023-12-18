import React from "react";
import bookmarkIcon from "./images/bookmark-3-line.png"; // 이미지 경로에 맞게 조정하세요.
import settingsIcon from "./images/list-settings-line.png"; // 이미지 경로에 맞게 조정하세요.
import userSettingsIcon from "./images/user-settings-line.png"; // 이미지 경로에 맞게 조정하세요.

function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <button>
            <img src={bookmarkIcon} alt="바로가기버튼1" />
          </button>
        </li>
        <li>
          <button>
            <img src={settingsIcon} alt="바로가기버튼2" />
          </button>
        </li>
        <li>
          <button>
            <img src={userSettingsIcon} alt="바로가기버튼3" />
          </button>
        </li>
      </ul>

      <p className="login_btn">
        <span>
          기업의 인사관리자가 사용 할 수 있는 기업인사관리 사이트 입니다.
        </span>
      </p>
    </div>
  );
}

export default Header;
