import Items from "./Items";

function ItemsList({ items }) {
  return (
    <ul className="list-group">
      <Items items={items}></Items>
    </ul>
  );
}
export default ItemsList;
