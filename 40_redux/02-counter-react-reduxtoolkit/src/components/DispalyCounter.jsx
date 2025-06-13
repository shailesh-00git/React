import { useSelector } from "react-redux";
function DispalyCounter() {
  const {counterVal} = useSelector((store) => store.counter);
  console.log("display called")
  return <p className="lead mb-4">counter current value : {counterVal}</p>
}

export default DispalyCounter;
