import style from "./FoodInput.module.css";
function FoodInput({ handlekeyDown }) {
  return (
    <input
      type="text"
      placeholder="add item here"
      onKeyDown={handlekeyDown}
      className={style.input}
    />
  );
}
export default FoodInput;
