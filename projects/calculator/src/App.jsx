import Container from "./components/Container";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  let button = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "-",
    "/",
    ".",
    "=",
  ];

  let [calVal, setCalVal] = useState("0");

  function handleOnClick(event) {
    console.log(event.target.firstChild.data);
    if (event.target.firstChild.data === "C") {
      setCalVal("");
    } else if (event.target.firstChild.data === "=") {
      setCalVal(eval(calVal));
    } else {
      let newEl = event.target.firstChild.data;
      setCalVal(calVal + newEl);
    }
  }

  return (
    <Container>
      <Display calVal={calVal}></Display>
      <ButtonContainer
        button={button}
        handleOnClick={handleOnClick}
      ></ButtonContainer>
    </Container>
  );
}

export default App;
