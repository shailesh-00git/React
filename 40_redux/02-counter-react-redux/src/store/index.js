import { createStore } from "redux";
const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};
const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "PRIVACY") {
    return { ...store, privacy: !store.privacy };
  } else if (action.type === "ADDITION") {
    return { ...store, counter: store.counter + 5 };
  } else if (action.type === "VARIABLE_ADDITION") {
    return { ...store, counter: store.counter + action.payload.value };
  } else if (action.type === "VARIABLE_SUBTRACTION") {
    return { ...store, counter: store.counter - action.payload.value };
  }
  return store;
};
const CounterStore = createStore(counterReducer);
export default CounterStore;
