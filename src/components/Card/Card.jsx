import s from "./Card.module.scss"
import { getDiscount } from '../../utils/getDiscount'


const Card = ({ product, onBuyClick }) => {
    const discountPrice = getDiscount(product.price, product.discountPercentage).toFixed(2);
    return (
        <div className={s.card}>
            <div className={s.card__poster}>
                <img src={product.thumbnail} alt={product.thumbnail} />
            </div>

            <div className={s.card__desc}>
                <h5 className={s.card__desc_title}>
                    {product.title}
                </h5>
                <div className={s.card__desc_bottom}>
                    <div className={s.card__desc_price}>
                        {
                            discountPrice ? (
                                <>
                                    <p className={s.old_price}>{product.price}</p>
                                    <p className={s.price}>{discountPrice}</p>
                                </>
                            ) : (
                                <p className={s.price}>{product.price}</p>
                            )
                        }
                    </div>
                    <button onClick={() => onBuyClick(product)} className={s.card__desc_btn}>
                        Купить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card