import React, { useState } from "react";

function WorkDurationCalculator({ setWorkDuration }) {
  const [startDate, setStartDate] = useState("");
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);

  const calculateDays = () => {
    if (!startDate) {
      alert("입사한 날짜를 입력하세요.");
      return;
    }

    const start = new Date(startDate);
    const today = new Date();
    const diffTime = Math.abs(today - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const calculatedYears = Math.floor(diffDays / 365);
    const calculatedMonths = Math.floor((diffDays % 365) / 30);

    setYears(calculatedYears);
    setMonths(calculatedMonths);
    setWorkDuration(`${calculatedYears}년 ${calculatedMonths}개월`);
  };

  return (
    <div className="date_cal">
      <div className="data_title">
        <h1>근무 날짜 계산기</h1>
        <label htmlFor="startDate">
          현재까지의 근무기간을 알 수 있는 계산기 입니다
        </label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <p className="data_info">* 계산된 날짜는 왼쪽 퀵메뉴에도 표시됩니다.</p>
        <button onClick={calculateDays}>날짜계산</button>
        <p id="result">
          {startDate
            ? `회사에 입사한 지 ${years}년 ${months}개월이 되었습니다.`
            : ""}
        </p>
      </div>
    </div>
  );
}

export default WorkDurationCalculator;
