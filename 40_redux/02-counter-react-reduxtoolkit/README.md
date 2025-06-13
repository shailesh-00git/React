## syntax: for index.js

@ import { createStore } from "redux";
const INITIAL_VALUE = {
counter: 0,
};
const counterReducer = (store = INITIAL_VALUE, action) => {
return store;
};
const CounterStore = createStore(counterReducer);
export default CounterStore;

## useSelector:

import { useSelector } from "react-redux";
const counter = useSelector((store) => store.counter);
and use counter as {counter where required}

## useDispatch:

import { useDispatch } from "react-redux";
const dispatch = useDispatch();

## rapping APPP with provider

import {Provider} from "react-redux";
<Provider store={CounterStore}>
<App />
</Provider>
