"use client";
import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

// Create TaskContext
const TaskContext = createContext();

// Reducer function for managing tasks
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: uuidv4(), text: action.payload, completed: false }];
    case "TOGGLE_TASK":
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case "REMOVE_TASK":
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};

// Provider Component
export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom Hook for accessing context
export const useTasks = () => {
  return useContext(TaskContext);
};