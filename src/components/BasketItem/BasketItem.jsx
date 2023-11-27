import "./BasketItem.scss";

const BasketItem = (props) => {
  const { orderedProduct, onProductRemove, orderCount } = props;
  const { name, price } = orderedProduct;
  const handleButtonClick = () => {
    onProductRemove(orderedProduct);
  };

  return (
    <li className="Basket-Item">
      <div className="info">
        <span>{orderCount}x</span>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <div className="actions">
        <button type="button" onClick={handleButtonClick}>
          remove
        </button>
      </div>
    </li>
  );
};

export default BasketItem;
