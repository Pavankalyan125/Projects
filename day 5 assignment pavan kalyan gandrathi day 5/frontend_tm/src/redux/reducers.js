import { LOGIN_USER, FETCH_TASKS, ADD_TASK, DELETE_TASK } from "./actions";

const initialState = {
  isAuthenticated: localStorage.getItem("auth") === "true",
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, isAuthenticated: true };

    case FETCH_TASKS:
      return { ...state, tasks: action.payload };

    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };

    default:
      return state;
  }
};

export { rootReducer }; // ✅ Export as a named export