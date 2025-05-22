import { createContext, useReducer } from "react";

const AppContext = createContext();

const initialState = [
  {
    id: Date.now(),
    name: "John Doe",
    age: 30,
  },
]; // Make sure this matches your reducer logic

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), name: action.newName, age: action.newAge }];

    case "DELETE":
      return state.filter((profile) => profile.id !== action.id);
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
