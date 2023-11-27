import "./Basket.scss";
import BasketItem from "../BasketItem/BasketItem";
import { groupBy } from "../../../utils";
const Basket = (props) => {
  const { orderedProducts, onProductRemove } = props;
  const totalcost = orderedProducts.reduce((avg, orderedProduct) => {
    return avg + orderedProduct.price;
  }, 0);

  const handleProductRemove = (orderedProducts) => {
    onProductRemove(orderedProducts);
  };

  const groupedOrderedProducts = Object.entries(
    groupBy(orderedProducts, (product) => product.name)
  );
  console.log(groupedOrderedProducts);
  return (
    <div className="basket">
      <header>
        <h5>
          <span>Basket</span>
          <span>( {orderedProducts.length} products)</span>
        </h5>
        <button>{}</button>
      </header>
      <div>
        <ul>
          {groupedOrderedProducts.map(([name, orderedProducts]) => (
            <BasketItem
              orderedProduct={orderedProducts[0]}
              orderCount={orderedProducts.length}
              onProductRemove={handleProductRemove}
            />
          ))}
        </ul>
      </div>
      <footer>
        <button>Order and Pay ({totalcost.toFixed(2)})</button>
      </footer>
    </div>
  );
};

export default Basket;
