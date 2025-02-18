import "./App.css";
function App() {
  let foodItems = [
    "sal",
    "Salate",
    "Vegetable soupe",
    "Cucumber",
    "Carrots",
    "banana",
    "mango",
  ];
  return (
    <>
      <h1>healthy foods</h1>
      <ul className="list-group">
        {foodItems.map((items) => (
          <li key={items} className="list-group-item">
            {items}
          </li> //key is like sa it to identify the elements
        ))}
      </ul>
    </>
  );
}

export default App;
