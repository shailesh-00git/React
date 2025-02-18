import Item from "./Item";
function ListItems({items}) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItems={item}></Item>
      ))}
    </ul>
  );
}
export default ListItems;
