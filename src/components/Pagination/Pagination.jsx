import { useContext } from "react"
import { ProductsContext } from "../../context/ProductsContext"
import s from "./Pagination.module.scss"
import { renderPagination } from "../../utils/renderPagination"

const Pagination = () => {
  const { productsPerPage, totalProducts, onPaginate, currentPage } = useContext(ProductsContext)
  const {renderPageNumbers, totalPages} = renderPagination(totalProducts, productsPerPage, currentPage)

  const handleNextClick = () => onPaginate(currentPage + 1);
  const handlePrevClick = () => onPaginate(currentPage - 1);

  return (
    <div className={s.pagination}>
      <button className={s.pagination__btn} disabled={currentPage === 1} onClick={handlePrevClick}>
        {"<"}
      </button>
      <div className={s.pagination__nums}>
        {
          renderPageNumbers().map((num, idx) => (
            typeof num === 'number' ? (
              <button
                key={idx}
                onClick={() => onPaginate(num)}
                className={`${s.pagination__nums_btn} ${currentPage === num ? s.pagination__nums_active : ''}`}
              >
                {num}
              </button>
            ) : (
              <span key={idx}>{num}</span>
            )
          ))
        }
      </div>
      <button disabled={currentPage === totalPages} className={s.pagination__btn} onClick={handleNextClick}>
        {">"}
      </button>
    </div>
  )
}

export default Pagination