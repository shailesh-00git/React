import Button from "./Button.jsx";
import style from "./ButtonContainer.module.css";
function ButtonContainer({ button }) {
  return (
    <div className={`${style.buttonContainer}`}>
      <Button button={button}></Button>
    </div>
  );
}
export default ButtonContainer;
