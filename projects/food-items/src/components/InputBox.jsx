import style from "./InputBox.module.css";
function Input({ handleKeyDown }) {
  //   function handleInput(event) {
  //     // console.log(event);

  //     console.log(event.target.value);
  //   }
  return (
    <input
      className={style.input}
      type="text"
      placeholder="Enter to add"
      onKeyDown={handleKeyDown}
    />
  );
}
export default Input;
