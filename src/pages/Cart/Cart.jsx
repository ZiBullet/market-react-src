import Sortbar from "../../components/Sortbar/Sortbar";
import CartItem from "../../components/CartItem/CartItem";
import s from "./Cart.module.scss";
import { getTotalPrice } from "../../utils/getTotalPrice";
import { useEffect } from "react";


const Cart = ({ cartProducts, onOrderClick, onCartProductRemove }) => {
  const totalPrice = getTotalPrice(cartProducts)

  return (
    <main className={s.cart}>
      {cartProducts.length ? (
        <>
          <div className={s.cart__rows}>
            {cartProducts.map((item, idx) => (
              <CartItem onCartProductRemove={onCartProductRemove} key={idx} product={item} />
            ))}
          </div>
          <p className={s.cart__bottom}>
            <span className={s.cart__total}>Общая стоимость: ${totalPrice.toFixed(2)}</span>
            <button className={s.cart__btn} onClick={onOrderClick}>Оформить заказ</button>
          </p>
        </>
      ) : (
        <h2>Здесь пока ничего нет...</h2>
      )}
    </main>
  );
};

export default Cart;
