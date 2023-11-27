import { useState } from "react";
import Basket from "./components/Basket/Basket";
import "./App.css";
import products from "./mocks/products.json";
import Product from "./components/Product/Product";
function App() {
  const [orderedProducts, setOrderedProducts] = useState([]);
  const handleProductSelect = (product) => {
    setOrderedProducts([...orderedProducts, product]);
  };
  const handleProductRemove = (orderedProduct) => {
    setOrderedProducts(
      orderedProducts.filter((product) => product.id !== orderedProduct.id)
    );
  };
  return (
    <>
      <Basket
        orderedProducts={orderedProducts}
        onProductRemove={handleProductRemove}
      />
      <main>
        <header>
          <h1>Welcom!</h1>
        </header>
        <hr />
        <section>
          {products.map((product) => (
            <Product
              product={product}
              onProductSelect={handleProductSelect}
              orderedProducts={orderedProducts}
              onProductRemove={handleProductRemove}
            ></Product>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
