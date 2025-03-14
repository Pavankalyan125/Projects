"use client";
import { useTasks } from "@/context/TaskContext";

export default function TaskList() {
  const { tasks, dispatch } = useTasks();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center p-2 border-b">
            <span className={task.completed ? "line-through text-gray-500" : ""}>
              {task.text}
            </span>
            <div>
              <button
                className="mr-2 px-2 py-1 bg-blue-500 text-white"
                onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                className="px-2 py-1 bg-red-500 text-white"
                onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}