import style from"./Item.module.css"
function Item(props) {
  return (
    <li className={`${style.item} list-group-item` }>
      {props.foodItems}
    </li>
  );
}
export default Item;
