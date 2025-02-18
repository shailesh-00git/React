import Heading from "./components/Item-Heading";
import ListItems from "./components/lList-items";
import ErrorMsg from "./components/Error-Message";
function App() {
  let foodItems = ["Vegetales", "sallate", "ghee", "milk", "fruits"];
  return (
    <>
      <Heading></Heading>
      <ErrorMsg items={foodItems}></ErrorMsg>
      <ListItems items={foodItems}></ListItems>
    </>
  );
}
export default App;
