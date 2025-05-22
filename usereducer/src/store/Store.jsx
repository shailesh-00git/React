import { createContext, useReducer } from "react";
const Task = createContext([]);


const reducer = (state, action) => {
  return state;
};
const initialTasks = [
  {
    task: "Task 1",
  },
  {
    task: "Task 2",
  },
  {
    task: "Task 3",
  },
  {
    task: "Task 4",
  },
  {
    task: "Task 5",
  },
];
const [state, dispatch] = useReducer(reducer, initialTasks);
const TaskProvider = ({ children }) => {
  return <Task.Provider value={{ state, dispatch }}>{children}</Task.Provider>;
};
