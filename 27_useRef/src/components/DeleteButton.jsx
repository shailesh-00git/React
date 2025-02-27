import style from "./Button.module.css";
function DeleteButton({ onDeleteClick, task }) {
  return (
    <>
      <div className="col-2">
        <button
          className={`${style.button} btn btn-danger`}
          onClick={() => onDeleteClick(task)}
        >
          Delete
        </button>
      </div>
    </>
  );
}
export default DeleteButton;
