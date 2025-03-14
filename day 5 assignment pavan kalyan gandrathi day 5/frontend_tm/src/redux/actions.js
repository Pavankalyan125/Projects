// src/redux/actions.js
export const LOGIN_USER = "LOGIN_USER";
export const FETCH_TASKS = "FETCH_TASKS";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";

// Login Action
export const loginUser = (credentials) => {
  return (dispatch) => {
    localStorage.setItem("auth", "true"); // Mock authentication
    dispatch({ type: LOGIN_USER, payload: credentials });
  };
};

// Fetch Tasks Action
export const fetchTasks = () => {
  return (dispatch) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    dispatch({ type: FETCH_TASKS, payload: tasks });
  };
};

// Add Task Action
export const addTask = (title) => {
  return (dispatch) => {
    const newTask = { id: Date.now(), title };
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    dispatch({ type: ADD_TASK, payload: newTask });
  };
};

// Delete Task Action
export const deleteTask = (taskId) => {
  return (dispatch) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    dispatch({ type: DELETE_TASK, payload: taskId });
  };
};
