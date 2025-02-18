import style from "./Container.module.css";
import ButtonContainer from "./ButtonContainer.jsx";
import Display from "./Display.jsx";
function Container({ button }) {
  return (
    <div className={`${style.container}`}>
      <Display></Display>
      {/* <div className="display"></div> */}
      <ButtonContainer button={button}></ButtonContainer>
    </div>
  );
}
export default Container;
