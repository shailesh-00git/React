import style from "./Btn.module.css";
function Button({ button }) {
  return (
    <>
      {button.map((btn) => (
        <button
          type="button"
          value={btn}
          key={btn}
          className={`${style.button} btn btn-info`}
        >
          {btn}
        </button>
      ))}
    </>
  );
}
export default Button;
