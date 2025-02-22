import style from "./Item.module.css";
function Item({ foodItem, bought, handleBuyButton }) {
  return (
    <li className={`${style.item} list-group-item ${bought && "active"}`}>
      <span>{foodItem}</span>
      <button
        className={`${style.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
}
export default Item;
