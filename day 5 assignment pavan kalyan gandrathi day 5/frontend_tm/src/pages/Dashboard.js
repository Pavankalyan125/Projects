import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "../redux/actions";
import "./dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleAddTask = () => {
    const taskText = prompt("Enter Task:");
    if (taskText) {
      dispatch(addTask({ id: Date.now(), text: taskText }));
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <button onClick={handleAddTask} className="add-task-btn">
        + Add Task
      </button>
      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="task-item">
              <span>{task.text}</span>
              <button onClick={() => dispatch(deleteTask(task.id))} className="delete-btn">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;

