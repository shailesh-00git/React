import Container from "./components/Container";
import Heading from "./components/Heading";
import ItemsList from "./components/ItemsList";
import Input from "./components/InputBox";
import { useState } from "react";
function App() {
  // let items = ["Vegetables", "Fruits", "Meat & Egg", "Dry fruits"];
  // use state return a arry containing two object
  // 0 indx = value to paint
  // 1 indx = set value (object)
  // this is below is array destructuring
  let [foodItems, setFoodItems] = useState(["dal", "roti"]);

  function handleOnKeyDown(event) {
    if (event.Key === "Enter") {
      // console.log(event);

      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      console.log(newFoodItem);

      // setFoodItems(newItems);
    }
    // console.log(event.target.value);
    // setText(event.target.value);
  }
  return (
    <Container>
      <Heading></Heading>
      <Input handleKeyDown={handleOnKeyDown}></Input>
      <ItemsList items={foodItems}></ItemsList>
    </Container>
  );
}
export default App;
