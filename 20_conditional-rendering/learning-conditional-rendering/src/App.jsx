function App() {
  let foodItems = ["dal..", "roti", "vegetables", "milk", "salate"];
  //let foodItems = [];
  // if (foodItems.length === 0) {
  //   return <h5>I am still hungary</h5>;
  // }
  return (
    <>
      <h1>Healthy Foods</h1>
      <ul class="list-group">
        {/* {foodItems.length===0?<h5>I am still hungary</h5>: null} */}
        {foodItems.length===0 && <h5>I am still hungary</h5>}
        {foodItems.map((item) => (
          <li class="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
