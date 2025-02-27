import "./App.css";
import Heading from "./components/Heading";
import Adder from "./components/TaskAdder";
import Tasks from "./components/Task";
import Container from "./components/container";
import ErrorMsg from "./components/ErrorMsg";
import { useState } from "react";

function App() {
  // let initial = [
  //   {
  //     Task: "Going School",
  //     Date: "23/02/2025",
  //   },
  //   {
  //     Task: "Going market",
  //     Date: "25/02/2025",
  //   },
  //   {
  //     Task: "Shopping",
  //     Date: "26/02/2025",
  //   },
  // ];
  let [taskAdd, setTaskAdd] = useState([]);

  function handleAddButton(task, date) {
    setTaskAdd((currentValue) => [...currentValue, { Task: task, Date: date }]);
  }
  function handleDeleteItem(itemName) {
    let newTasks = taskAdd.filter((item) => item.Task !== itemName);
    setTaskAdd(newTasks);
    // console.log(`item deleted :${itemName}`);
  }

  return (
    <Container>
      <Heading></Heading>
      <Adder handleAddButton={handleAddButton}></Adder>
      <ErrorMsg task={taskAdd}></ErrorMsg>
      <Tasks task={taskAdd} onDeleteClick={handleDeleteItem}></Tasks>
    </Container>
  );
}

export default App;
