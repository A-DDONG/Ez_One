import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // UUID 라이브러리를 사용하여 고유 ID 생성

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showInput, setShowInput] = useState(false);

  const addTask = () => {
    if (!newTask.trim()) {
      alert("업무명을 입력해주세요.");
      return;
    }
    setTasks([...tasks, { id: uuidv4(), name: newTask, completed: false }]);
    setNewTask("");
    setShowInput(false);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="task_list">
      <h1>업무 진행상황</h1>
      <div id="taskList">
        <h2>진행 중인 업무</h2>
        {showInput && (
          <div id="taskInput">
            <label for="taskName">업무명</label>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="업무명을 입력해주세요"
            />
            <p>
              <button onClick={addTask}>저장</button>
            </p>
          </div>
        )}
        {tasks
          .filter((task) => !task.completed)
          .map((task) => (
            <div key={task.id} className="task">
              <span>{task.name}</span>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              <button onClick={() => deleteTask(task.id)}>삭제</button>
            </div>
          ))}
        <p className="list_add">
          <button onClick={() => setShowInput(!showInput)}>업무 추가</button>
        </p>
      </div>
      <div id="completedTaskList">
        <h2>완료된 업무</h2>
        {tasks
          .filter((task) => task.completed)
          .map((task) => (
            <div key={task.id} className="task">
              <span>{task.name}</span>
              <button onClick={() => deleteTask(task.id)}>삭제</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TaskList;
