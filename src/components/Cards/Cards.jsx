import Card from "../Card/Card";
import s from "./Cards.module.scss";


const Cards = ({ products, onBuyClick }) => {
    return (
        <div className={s.cards}>
            {
                products ? products.map(product => ( 
                <Card key={product.id} onBuyClick={onBuyClick} product={product} />
            )
                ) : (
                    <h2>идет загрузка...</h2>
                )
            }
        </div>
    )
}

export default Cards