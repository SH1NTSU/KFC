import "./Cards.scss";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Carousel from "react-multi-carousel";

const Cards = (props) => {
  const { product } = props;
  const { name, price, description, imageUrl } = product;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <section className="bottom-section">
        <div className="bottom-nav">
          <h1>Dodaj to co lubisz</h1>
          <div className="bottom-buttons">
            <button>
              <FaRegArrowAltCircleLeft />
            </button>
            <button>
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
        <div className="Carousel">
          <Carousel responsive={responsive}>
            <div className="Carousel-item">
              <img src={imageUrl} />
              <div className="Card-info">
                <h1>{name}</h1>
                <h2>{price}</h2>
              </div>
              <button>
                <FaPlus />
              </button>
            </div>
            <div className="Carousel-item">
              <img src={imageUrl} />
              <div className="Card-info">
                <h1>{name}</h1>
                <h2>{price}</h2>
              </div>
              <button>
                <FaPlus />
              </button>
            </div>
            <div className="Carousel-item">
              <img src={imageUrl} />
              <div className="Card-info">
                <h1>{name}</h1>
                <h2>{price}</h2>
              </div>
              <button>
                <FaPlus />
              </button>
            </div>
            <div className="Carousel-item">
              <img src={imageUrl} />
              <div className="Card-info">
                <h1>{name}</h1>
                <h2>{price}</h2>
              </div>
              <button>
                <FaPlus />
              </button>
            </div>
            <div className="Carousel-item">
              <img src={imageUrl} />
              <div className="Card-info">
                <h1>{name}</h1>
                <h2>{price}</h2>
              </div>
              <button>
                <FaPlus />
              </button>
            </div>
            <div className="Carousel-item">
              <img src={imageUrl} />
              <div className="Card-info">
                <h1>{name}</h1>
                <h2>{price}</h2>
              </div>
              <button>
                <FaPlus />
              </button>
            </div>
            <div className="Carousel-item">
              <img src={imageUrl} />
              <div className="Card-info">
                <h1>{name}</h1>
                <h2>{price}</h2>
              </div>
              <button>
                <FaPlus />
              </button>
            </div>
            <div className="Carousel-item">
              <img src={imageUrl} />
              <div className="Card-info">
                <h1>{name}</h1>
                <h2>{price}</h2>
              </div>
              <button>
                <FaPlus />
              </button>
            </div>
            <div className="Carousel-item">
              <img src={imageUrl} />
              <div className="Card-info">
                <h1>{name}</h1>
                <h2>{price}</h2>
              </div>
              <button>
                <FaPlus />
              </button>
            </div>
            <div className="Carousel-item">
              <img src={imageUrl} />
              <div className="Card-info">
                <h1>{name}</h1>
                <h2>{price}</h2>
              </div>

              <button>
                <FaPlus />
              </button>
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
};
export default Cards;
