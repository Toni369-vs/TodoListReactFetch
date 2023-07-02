import React, { useState } from "react";


const TaskList = ({ tasks, onDeleteTask }) => {
  const [selectedTaskId, setSelectedTaskId] = useState("");
 

  const handleTaskHover = (taskId) => {
    setSelectedTaskId(taskId);
  };

  const deleteTask = (taskId) => {
    if (taskId === selectedTaskId) {
      onDeleteTask(taskId);
    }
  };

 
  return (
    <div className="container-list">
      {tasks.length === 0 ? (
        <p>No hay tareas, añadir tareas</p>
      ) : (
        <ul className="form-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              onMouseOver={() => handleTaskHover(task.id)}
              onMouseLeave={() => handleTaskHover("")}
            >
              {task.label}
              {selectedTaskId === task.id && (
                <button
                  className="fa-solid fa-trash"
                  onClick={() => deleteTask(task.id)}
                ></button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;