import React, { useState } from "react";

// 출장비 계산기
function ExpenseCalculator() {
  const [days, setDays] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [meal, setMeal] = useState("");
  const [totalExpense, setTotalExpense] = useState(null);

  const calculateExpense = () => {
    if (!days || !accommodation || !meal) {
      alert("모든 값을 입력해주세요.");
      return;
    }
    const total = days * (Number(accommodation) + Number(meal));
    setTotalExpense(total);
  };

  return (
    <div className="trip_cal">
      <h1>출장비 계산기</h1>
      <p>출장비를 계산할 수 있는 계산기 입니다</p>
      <label htmlFor="days">출장 일수:</label>
      <input
        type="number"
        id="days"
        value={days}
        onChange={(e) => setDays(e.target.value)}
        placeholder="일 수를 입력해주세요"
      />
      <br />

      <label htmlFor="accommodation">숙박비:</label>
      <input
        type="number"
        id="accommodation"
        value={accommodation}
        onChange={(e) => setAccommodation(e.target.value)}
        placeholder="숙박비를 입력해주세요"
      />
      <br />

      <label htmlFor="meal">식비:</label>
      <input
        type="number"
        id="meal"
        value={meal}
        onChange={(e) => setMeal(e.target.value)}
        placeholder="식비를 입력해주세요"
      />
      <br />

      <span>
        * 숙박비와 식비는 하루 단위로 입력해주세요. <br />
        출장 일수에 따라 자동으로 계산됩니다.
      </span>
      <button onClick={calculateExpense}>계산하기</button>

      {totalExpense !== null && (
        <div id="output">총 출장비: {totalExpense}원</div>
      )}
    </div>
  );
}

export default ExpenseCalculator;
