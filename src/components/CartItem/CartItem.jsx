import { useState } from "react";
import { getDiscount } from "../../utils/getDiscount";
import s from "./CartItem.module.scss";

const CartItem = ({ product, onCartProductRemove }) => {
    const [quantity, setQuantity] = useState(product.quantity)
  const discountPrice = getDiscount(
    product.price,
    product.discountPercentage
  ).toFixed(2);


    const handlePlusClick = () => {
        if (product.quantity === product.stock) return;

        setQuantity(product.quantity += 1);
    }

    const handleMinusClick = () => {
        if (product.quantity === 1) return onCartProductRemove(product);

        setQuantity(product.quantity -= 1);
    }
  return (
    <div className={s.product_row}>
      <div className={s.product_row__poster}>
        <img src={product.thumbnail} alt={product.thumbnail} />
      </div>

      <div className={s.product_row__desc}>
        <h5 className={s.product_row__desc_title}>{product.title}</h5>
        <div className={s.product_row__desc_bottom}>
          <div className={s.product_row__desc_price}>
            {discountPrice ? (
              <>
                <p className={s.old_price}>${product.price}</p>
                <p className={s.price}>${discountPrice}</p>
              </>
            ) : (
              <p className={s.price}>${product.price}</p>
            )}
          </div>
          <div className={s.product_row__desc_btns}>
                <button className={s.product_row__desc_btn} onClick={handlePlusClick}>+</button>

                <span>{quantity}</span>
                
                <button className={s.product_row__desc_btn} onClick={handleMinusClick}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
