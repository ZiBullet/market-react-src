import React from "react";
import Cards from "../../components/Cards/Cards";
import Sortbar from "../../components/Sortbar/Sortbar";

const Cart = ({ cartProducts, options, onApply }) => {
  return (
    <div>
        <Sortbar options={options} productsAmount={cartProducts.length} onApply={onApply} />
      <Cards products={cartProducts} />
    </div>
  );
};

export default Cart;
