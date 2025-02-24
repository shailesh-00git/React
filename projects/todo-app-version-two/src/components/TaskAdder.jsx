import style from "./Button.module.css";
import style1 from "./SingleRow.module.css";
import { useState } from "react";
function Adder({ handleAddButton }) {
  let [taskName, setTaskName] = useState("");
  let [taskDate, setTaskDate] = useState("");

  function handleNameChange(event) {
    setTaskName(event.target.value);
  }
  function handleDateChange(event) {
    setTaskDate(event.target.value);
  }

  function OnAddButtonClick() {
    handleAddButton(taskName, taskDate);
    setTaskName("");
    setTaskDate("");
  }

  return (
    <div className={`${style1.row} row`}>
      <div className="col-6">
        <input
          type="text"
          value={taskName}
          placeholder="Add task"
          onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input type="date" value={taskDate} onChange={handleDateChange} />
      </div>
      <div className="col-2">
        <button
          className={`${style.button} btn btn-success`}
          onClick={OnAddButtonClick}
        >
          Add
        </button>
      </div>
    </div>
  );
}
export default Adder;
