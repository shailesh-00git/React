import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useCounter from "./counter/CounterC0mponenet";

function App() {
  const { increase, decrease, reset, count } = useCounter(10);
  return (
    <>
      <button className="btn btn-outline-primary " onClick={increase}>
        +
      </button>
      <span className="mx-5 text-2xl">{count}</span>
      <button className="btn btn-outline-primary" onClick={decrease}>
        -
      </button>
      
      <button className=" btn btn-outline-secondary mx-2" onClick={reset}>
        Reset counter{" "}
      </button>
    </>
  );
}

export default App;
