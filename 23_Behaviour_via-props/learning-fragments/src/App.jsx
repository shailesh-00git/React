import Container from "./components/Container";
import Heading from "./components/Heading";
import ItemsList from "./components/ItemsList";
import Input from "./components/InputBox";
import { useState } from "react";
function App() {
  // use state return a arry containing two object
  // 0 indx = value to paint
  // 1 indx = set value (object)
  // this is below is array destructuring
  let [TextToShow, setText] = useState("");

  function handleOnChange(event) {
    console.log(event.target.value);
    setText(event.target.value);
  }
  return (
    <Container>
      <Heading></Heading>
      <Input handleInput={handleOnChange}></Input>
      <p>{TextToShow}</p>
      <ItemsList></ItemsList>
    </Container>
  );
}
export default App;
