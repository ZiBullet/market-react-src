import { useSelector } from "react-redux";
import Card from "../Card/Card";
import s from "./Cards.module.scss";

const Cards = ({ products, onBuyClick }) => {
    
  const isLoading = useSelector((state) => state.products.isLoading)
    const error = useSelector(state => state.products.error)
    
    return (
        <div className={s.cards}>
            {
                isLoading ? (
                    <h2>идет загрузка...</h2>
                ) : products ? (
                    products?.map(product => (
                        <Card key={product.id} product={product} onBuyClick={onBuyClick} />
                    ))
                ) : error ? (
                    <p>error: {error}</p>
                ) : (
                    <p>Out of service</p>
                )
            }
        </div>
    )
}

export default Cards