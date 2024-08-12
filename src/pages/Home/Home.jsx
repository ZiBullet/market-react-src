import Cards from "../../components/Cards/Cards"
import Sortbar from "../../components/Sortbar/Sortbar"
import s from "./Home.module.scss"

const Home = ({options, onApply, onBuyClick, products}) => {
    return (
        <>
            <Sortbar options={options} productsAmount={products?.length} onApply={onApply} />
            <Cards onBuyClick={onBuyClick} products={products} />
        </>
    )
}

export default Home