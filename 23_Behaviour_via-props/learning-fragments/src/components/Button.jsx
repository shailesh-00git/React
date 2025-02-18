import style from "./Buttons.module.css";
function Button({ item }) {
  function handle(e) {
    console.log(`${item} being clicked`);
    console.log(e);
  }
  return (
    <button
      className={`${style.button} btn btn-info`}
      onClick={(event) => handle(event)}
    >
      Buy
    </button>
  );
}
export default Button;
