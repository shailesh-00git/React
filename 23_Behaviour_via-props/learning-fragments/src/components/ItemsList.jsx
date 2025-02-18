import Items from "./Items";

function ItemsList() {
  let items = ["Vegetables", "Fruits", "Meat & Egg", "Dry fruits"];
  return (
    <ul className="list-group">
      <Items items={items}></Items>
    </ul>
  );
}
export default ItemsList;
