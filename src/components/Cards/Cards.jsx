import { useSelector } from "react-redux";
import Card from "../Card/Card";
import s from "./Cards.module.scss";
import { ProductsContext } from "../../context/ProductsContext";
import { useContext } from "react";
import Pagination from "../Pagination/Pagination";

const Cards = ({ }) => {
    const { products, onBuyClick } = useContext(ProductsContext)

    const isLoading = useSelector((state) => state.products.isLoading)
    const error = useSelector(state => state.products.error)

    return (
        <>
            {
                isLoading ? (
                    <h2>идет загрузка...</h2>
                ) : products ? (
                    <>
                    <div className={s.cards}>
                        {
                            products?.map(product => (
                                <Card key={product.id} product={product} onBuyClick={onBuyClick} />
                            ))
                        }
                    </div>
                    <Pagination />   
                    </>
                ) : error ? (
                    <p>error: {error}</p>
                ) : (
                    <p>Out of service</p>
                )
            }
        </>

    )
}

export default Cards