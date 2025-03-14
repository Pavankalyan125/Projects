"use client";
import { useState } from "react";
import { useTasks } from "@/context/TaskContext";

export default function AddTask() {
  const [taskText, setTaskText] = useState("");
  const { dispatch } = useTasks();

  const addTask = () => {
    if (taskText.trim() !== "") {
      dispatch({ type: "ADD_TASK", payload: taskText });
      setTaskText(""); // Clear input
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="border p-2 w-full"
      />
      <button onClick={addTask} className="mt-2 px-4 py-2 bg-green-500 text-white">
        Add Task
      </button>
    </div>
  );
}