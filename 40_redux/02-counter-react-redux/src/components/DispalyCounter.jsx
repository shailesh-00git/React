import { useSelector } from "react-redux";
function DispalyCounter() {
  const counter = useSelector((store) => store.counter);
  console.log("display called")
  return <p className="lead mb-4">counter current value : {counter}</p>;
}

export default DispalyCounter;
