import style from "./Button.module.css";
function Button({ button }) {
  return (
    <>
      {button.map((btn) => (
        <div key={btn} className={`${style.button}`}>
          {btn}
        </div>
      ))}
    </>
  );
}
export default Button;
