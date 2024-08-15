import React from "react";
import Cards from "../../components/Cards/Cards";
import Sortbar from "../../components/Sortbar/Sortbar";

const Cart = ({ options, onApply, onBuyClick, cartProducts }) => {
  return (
    <div>
      <Sortbar options={options} products={cartProducts} onApply={onApply} />
      <Cards onBuyClick={onBuyClick} products={cartProducts} />
    </div>
  );
};

export default Cart;
