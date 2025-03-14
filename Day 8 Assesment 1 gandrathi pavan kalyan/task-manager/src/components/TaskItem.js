import useTasks from "../../hooks/useTasks";

const TaskItem = ({ task }) => {
  const { toggleTask, removeTask } = useTasks();

  return (
    <li>
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;