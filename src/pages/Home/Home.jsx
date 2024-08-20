import { useContext } from "react"
import Cards from "../../components/Cards/Cards"
import PanelsLayout from "../../components/PanelsLayout/PanelsLayout"
import { calcCurrentProducts } from "../../utils/calcCurrentProducts"
import s from "./Home.module.scss"
import { ProductsContext } from "../../context/ProductsContext"

const Home = ({}) => {
    const {products, currentPage} = useContext(ProductsContext);
    const {currentProducts} = calcCurrentProducts(products, currentPage);

    return (
        <PanelsLayout totalProducts={products?.length}>
            <Cards data={currentProducts} totalProducts={products?.length} />
        </PanelsLayout>
    )
}

export default Home