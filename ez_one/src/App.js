// App.js
import React, { useState } from "react";
import QuickMenu from "./QuickMenu";
import Content from "./Content";
import "./css/layout.css";
import "./css/reset.css";

function App() {
  const [workDuration, setWorkDuration] = useState("");
  return (
    <div id="wrapper">
      <QuickMenu workDuration={workDuration} />
      <Content setWorkDuration={setWorkDuration} />
    </div>
  );
}

export default App;
