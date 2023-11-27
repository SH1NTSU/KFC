import ProductModal from "../ProductModal/ProductModal";
import "./Product.scss";
import React, { useState } from "react";
const Product = (props) => {
  const { product, orderedProducts, onSubmit } = props;
  const { name, price, description, imageUrl } = product;
  const [isModalOpen, setModalOpen] = useState(false);

  const isOrdered = orderedProducts.some(
    (orderedProduct) => orderedProduct.id === product.id
  );

  const orderCount = orderedProducts.filter((orderedProduct) => {
    return orderedProduct.id === product.id;
  }).length;
  const handleButtonClose = () => {
    setModalOpen(false);
  };
  const handleButtonClick = () => {
    setModalOpen(true);
  };

  return (
    <article className="product" data-ordered={isOrdered}>
      <div>
        <img src={imageUrl} alt={name} />
      </div>
      <div>
        <header>
          <h4>{name}</h4>
          <p>{description}</p>
        </header>
        <section>
          <strong>{price}</strong>
          <button type="button" onClick={handleButtonClick}>
            {isOrdered ? orderCount : "+"}
          </button>
          <ProductModal
            onClose={handleButtonClose}
            product={product}
            onOpen={isModalOpen}
            onSubmit={onSubmit}
          ></ProductModal>
        </section>
      </div>
    </article>
  );
};

export default Product;
