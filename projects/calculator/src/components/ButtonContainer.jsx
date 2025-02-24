import style from "./BtnContainer.module.css";
import Button from "./Btn";

let ButtonContainer = ({ button, handleOnClick }) => {
  return (
    <div
      className={style.BtnContainer}
      onClick={(event) => handleOnClick(event)}
    >
      <Button button={button}></Button>
    </div>
  );
};
export default ButtonContainer;
