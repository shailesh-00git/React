import style from "./Button.module.css";
import style1 from "./SingleRow.module.css";

import { useRef } from "react";

function Adder({ handleAddButton }) {
  // let [taskName, setTaskName] = useState("");
  // let [taskDate, setTaskDate] = useState("");

  // Use of useRef
  let taskName = useRef();
  let taskDate = useRef();

  // function handleNameChange(event) {
  //   setTaskName(event.target.value);
  //   //useref
  //   updates.current += 1;
  // }
  // function handleDateChange(event) {
  //   setTaskDate(event.target.value);
  //   // Display useRef
  //   console.log(`updates = ${updates.current}`);
  // }

  function OnAddButtonClick() {
    let TaskName = taskName.current.value;
    let TaskDate = taskDate.current.value;
    taskName.current.value = "";
    taskDate.current.value = "";
    // console.log(TaskName);
    // console.log(TaskDate);

    handleAddButton(TaskName, TaskDate);

    // setTaskName("");
    // setTaskDate("");
  }

  return (
    <div className={`${style1.row} row`}>
      <div className="col-6">
        <input
          ref={taskName}
          type="text"
          // value={taskName}
          placeholder="Add task"

          // onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input
          ref={taskDate}
          type="date"
          // value={taskDate}

          // onChange={handleDateChange}
        />
      </div>
      <div className="col-2">
        <button
          className={`${style.button} btn btn-success`}
          onClick={OnAddButtonClick}
        >
          ADD
        </button>
      </div>
    </div>
  );
}
export default Adder;
