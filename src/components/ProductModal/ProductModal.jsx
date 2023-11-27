import "./ProductModal.scss";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

import Cards from "../Cards/Cards.jsx";
import "react-multi-carousel/lib/styles.css";
const ProductModal = (props) => {
  const {
    product,
    onOpen,
    onClose,
    onProductSelect,
    onCount,
    onProductRemove,
  } = props;
  const { name, price, description, imageUrl } = product;

  return onOpen ? (
    <div>
      <div className="productmodal">
        <div className="productmodal-inner">
          <section className="nav">
            <div className="section-nav">
              <button onClick={onClose}>
                <FaArrowLeftLong />
              </button>
              <h1>{name}</h1>
              <FaRegHeart />
            </div>
            <main className="main-section">
              <img src={imageUrl} />
              <div className="name-price-container">
                <h1>{name}</h1>
                <h2>{price}</h2>
              </div>
              <span className="text-container"> {description}</span>
            </main>
          </section>
          <Cards product={product} />
          <footer className="footer-section">
            <div className="footer-add-product">
              <button onClick={onProductRemove}>-</button>
              <span>{onCount}</span>
              <button onClick={onProductSelect}>+</button>
            </div>
            <button className="add-button">Do daj do koszyka {price}</button>
          </footer>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ProductModal;
