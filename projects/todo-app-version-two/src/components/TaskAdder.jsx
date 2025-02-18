import style from "./Button.module.css";
import style1 from "./SingleRow.module.css";
function Adder() {
  return (
    <div className={`${style1.row} row`}>
      <div className="col-6">
        <input type="text" placeholder="Add task" />
      </div>
      <div className="col-4">
        <input type="date" />
      </div>
      <div className="col-2">
        <button className={`${style.button} btn btn-success`}>Add</button>
      </div>
    </div>
  );
}
export default Adder;
