import React, { useState } from "react";
import "./style.css";
import ellipse from "../../images/bestsellers/ellipse.svg";
import heart from '../../images/bestsellers/heart.svg'
import heartOn from '../../images/bestsellers/heart-on.svg'
import minus from '../../images/bestsellers/minus.svg'
import plus from '../../images/bestsellers/plus.svg'


const Stock = ({ product }) => {
  const [like, setLike] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleLikeClick = () => {
    setLike(!like);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt="Product" />
        <button className={`like-button ${like ? 'liked' : ''}`} onClick={handleLikeClick}>
          {like ? (
            <img width={16} height={16} src={heartOn} alt="" />
          ) : (
            <img width={16} height={16} src={heart} alt="" />
          )}
        </button>
      </div>
      <div className="product-details">
        <p className="product-desc">{product.description}</p>
        <div className="price-box">
          <p className="news-price">{product.price}</p>
          <p className="news-noprice">{product.price}</p>
        </div>
        <p className="product-stock">
          {product.inStock ? "В наличии" : "Нет в наличии"}
        </p>
        <div className="product-kit">
          <img src={ellipse} alt="Kit" />
          <p>Комплект</p>
        </div>
        <div className="quantity-counter">
        <button className="quantity-counter-btn" onClick={handleDecrement}>
          <img width={24} height={24} src={minus} alt="" />
          </button>
          <p>{quantity}</p>
          <button className="quantity-counter-btn" onClick={handleIncrement}>
          <img width={24} height={24} src={plus} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stock;
