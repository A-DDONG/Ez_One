import React, { useState } from "react";

function Timeline() {
  const [items, setItems] = useState([]); // 타임라인 항목 배열
  const [newItem, setNewItem] = useState(""); // 새 타임라인 항목의 내용

  // 새 항목 추가 함수
  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, { id: Date.now(), content: newItem }]);
      setNewItem(""); // 입력 필드 초기화
    }
  };

  // 특정 항목 삭제 함수
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="pro_timeline">
      <h1>내 인사정보 타임라인</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <p>{item.content}</p>
            <button onClick={() => deleteItem(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="아이템 입력"
      />
      <button onClick={addItem}>저장</button>
    </div>
  );
}

export default Timeline;
