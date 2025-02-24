import style from "./Display.module.css";
function Display({ calVal }) {
  return <div className={style.display}>{calVal}</div>;
}
export default Display;
