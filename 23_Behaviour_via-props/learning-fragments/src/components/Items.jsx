import Button from "./Button";
import style from "./Items.module.css";
function Items({ items }) {
  return (
    <>
      {items.map((item) => (
        <li key={item} className={`${style.items} list-group-item`}>
          {item}
          <Button item={item}></Button>
        </li>
      ))}
    </>
  );
}
export default Items;
