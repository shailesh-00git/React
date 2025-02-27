import style from "./Button.module.css";
import { MdDeleteForever } from "react-icons/md";
function DeleteButton({ onDeleteClick, task }) {
  return (
    <>
      <div className="col-2">
        <button
          className={`${style.button} btn btn-danger`}
          onClick={() => onDeleteClick(task)}
        >
          <MdDeleteForever />
        </button>
      </div>
    </>
  );
}
export default DeleteButton;
