import React, { useState, useEffect } from "react";
import '../assets/css/cart.css'

const Cart = ({ cart, setCart, handleChange }) => {
  const [priceNew, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((data) => data.id !== id);
    setCart(arr);
    handlePrice();
  };
  console.log(cart);
  const handlePrice = () => {
    let ans = 0;
    cart.map((data) => (ans += data.amount * data.priceNew));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div>
      {cart.map((data) => (
        <div className="cart_box" key={data.id}>
          <div className="cart_img">
            <img src={data.img} alt="" />
            <p>{data.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(data, 1)}>+</button>
            <button>{data.amount}</button>
            <button onClick={() => handleChange(data, -1)}>-</button>
          </div>
          <div>
            <span>{data.priceNew} đ</span>
            <button onClick={() => handleRemove(data.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {priceNew} đ</span>
      </div>
    </div>
  );
};

export default Cart;
