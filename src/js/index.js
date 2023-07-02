//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import "../styles/TaskForm.css";
import "../styles/TaskList.css";
import TaskForm from "./component/TaskForm.jsx";


ReactDOM.render(<TaskForm />, document.querySelector("#app"));