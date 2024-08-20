import { useDispatch, useSelector } from "react-redux"
import s from "./Categories.module.scss"
import { useContext, useEffect, useState } from "react"
import { getData } from "../../store/categories/categoriesSlice"
import PanelsLayout from "../../components/PanelsLayout/PanelsLayout"
import Cards from "../../components/Cards/Cards"
import { getCategoryProduct } from "../../store/categoryProduct/categoryProductSlice"
import { calcCurrentProducts } from "../../utils/calcCurrentProducts"
import { ProductsContext } from "../../context/ProductsContext"

const Categories = () => {
    const [category, setCategory] = useState("beauty")
    const categories = useSelector(state => state.categories.value)
    const isLoading = useSelector(state => state.categories.isLoading)
    const error = useSelector(state => state.categories.error)
    const categoryProducts = useSelector(state => state.categoryProduct.value)
    const dispatch = useDispatch();
    const { currentPage, setCurrentPage } = useContext(ProductsContext)
    const { currentProducts } = calcCurrentProducts(categoryProducts, currentPage);

    useEffect(() => {
        dispatch(getData());
        dispatch(getCategoryProduct(category))
    }, [dispatch, category])

    const handleCategoryClick = (slug) => {
        setCurrentPage(1);
        setCategory(slug);
    };
    return (
        <main className={s.categories}>
            {
                categories ? (
                    <div className="container">
                        <PanelsLayout totalProducts={categoryProducts?.length}>
                            <aside className={s.categories__side}>
                                <ul className={s.categories__list}>
                                    {
                                        categories.map((item, idx) => (
                                            <li key={idx} className={s.categories__list_item}>
                                                <button
                                                    onClick={() => handleCategoryClick(item.slug)}
                                                    className={`${s.categories__list_btn} ${category === item.slug ? s.categories__list_btn_active : ''}`}
                                                >
                                                    {item.name}
                                                </button>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </aside>
                            <Cards data={currentProducts} totalProducts={categoryProducts?.length} />
                        </PanelsLayout>
                    </div>
                ) : isLoading ? (
                    <h2>Идет загрузка...</h2>
                ) : error ? (
                    <h2>Error: {error}</h2>
                ) : (
                    <h2>Мы не знаем что это такое</h2>
                )
            }
        </main>
    )
}

export default Categories