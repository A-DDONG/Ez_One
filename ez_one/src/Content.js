import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import WorkDurationCalculator from "./WorkDurationCalculator";
import ExpenseCalculator from "./ExpenseCalculator";
import TaskList from "./TaskList";

function Content({ setWorkDuration }) {
  return (
    <div id="content">
      <Header />
      <div className="container">
        <Profile />
        <div className="mid_container">
          <WorkDurationCalculator setWorkDuration={setWorkDuration} />
          <ExpenseCalculator />
        </div>
        <TaskList />
      </div>
    </div>
  );
}

export default Content;
