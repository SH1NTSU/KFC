import "./ProductModal.scss";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import React, { useState } from "react";
import Cards from "../Cards/Cards.jsx";
import "react-multi-carousel/lib/styles.css";
const ProductModal = (props) => {
  const { product, onOpen, onClose, onSubmit } = props;
  const { name, price, description, imageUrl } = product;
  const [cart, setCart] = useState([]);
  const [active, setActive] = useState(false);
  const totalCost = cart.reduce((total, product) => total + product.price, 0);
  const addToCart = () => {
    setCart([...cart, { ...product }]);
  };
  const removeFromCart = () => {
    const newCart = [...cart];
    newCart.splice(newCart.indexOf(product), 1);
    setCart(newCart);
  };
  const handleSubmitButton = () => {
    onSubmit(cart);
    onClose();
    setCart([]);
  };

  return onOpen ? (
    <div>
      <div className="productmodal">
        <div className="productmodal-inner">
          <section className="nav">
            <div className="section-nav">
              <button className="left-arrow" onClick={onClose}>
                <FaArrowLeftLong />
              </button>
              <h1>{name}</h1>
              <button className="heart" onClick={() => setActive(!active)}>
                <FaRegHeart color={active ? "red" : "black"} />
              </button>
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
              <button className="minus-button" onClick={removeFromCart}>
                -
              </button>
              <span>{cart.length}</span>
              <button className="plus-button" onClick={addToCart}>
                +
              </button>
            </div>
            <button className="add-button" onClick={handleSubmitButton}>
              Dodaj do koszyka {totalCost}
            </button>
          </footer>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ProductModal;
