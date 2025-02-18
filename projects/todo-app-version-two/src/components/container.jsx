import Adder from "./TaskAdder";
import Tasks from "./Task";
function Container() {
  let task = [
    {
      Task: "Going School",
      Date: "23/02/2025",
    },
    {
      Task: "Going market",
      Date: "25/02/2025",
    },
    {
      Task: "Shopping",
      Date: "26/02/2025",
    },
  ];
  return (
    <>
      <div className="container text-center">
        <Adder></Adder>
        <Tasks tasks={task}></Tasks>
      </div>
    </>
  );
}
export default Container;
