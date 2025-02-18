import style from "./Button.module.css";
function DeleteButton() {
  return (
    <>
      <div className="col-2">
        <button className={`${style.button} btn btn-danger`}>Delete</button>
      </div>
    </>
  );
}
export default DeleteButton;
