import style from "./InputBox.module.css";
function Input({ handleInput }) {
  //   function handleInput(event) {
  //     // console.log(event);

  //     console.log(event.target.value);
  //   }
  return (
    <input
      className={style.input}
      type="text"
      placeholder="Enter to add"
      onChange={handleInput}
    />
  );
}
export default Input;
