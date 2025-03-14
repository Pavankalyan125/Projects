import { useTaskContext } from "../src/context/TaskContext";

const useTasks = () => {
  const { state, dispatch } = useTaskContext();

  const addTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const removeTask = (taskId) => {
    dispatch({ type: "REMOVE_TASK", payload: taskId });
  };

  const toggleTask = (taskId) => {
    dispatch({ type: "TOGGLE_TASK", payload: taskId });
  };

  return { tasks: state.tasks, addTask, removeTask, toggleTask };
};

export default useTasks;