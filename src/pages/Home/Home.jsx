import Cards from "../../components/Cards/Cards"
import PanelsLayout from "../../components/PanelsLayout/PanelsLayout"
import Sortbar from "../../components/Sortbar/Sortbar"
import s from "./Home.module.scss"

const Home = ({options, onApply, onBuyClick, products}) => {
    return (
        <PanelsLayout>
            <Cards products={products} onBuyClick={onBuyClick} />
        </PanelsLayout>
    )
}

export default Home