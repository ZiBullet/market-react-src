import { useContext, useState } from "react";
import s from "./Sortbar.module.scss";
import arrowIcon from "../../assets/icons/arrow.svg";
import { ProductsContext } from "../../context/ProductsContext";
import { useLocation } from "react-router-dom";

const Sortbar = ({ totalProducts }) => {
    const { options, onApply, sortbarPos } = useContext(ProductsContext)
    const { pathname } = useLocation()
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const clsOpened = isOpen ? s.opened : '';
    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };


    return (
        <div ref={sortbarPos} className={s.sortbar}>
            <div className={s.sortbar__sorter}>
                <div className={s.sortbar__sorter_select}>
                    <button className={s.sortbar__select_box} onClick={toggleDropdown}>
                        {selectedOption ? selectedOption.label : 'Сортировать'}
                        <div className={`${s.sortbar__select_icon} ${clsOpened}`}>
                            <img src={arrowIcon} alt="arrow down" />
                        </div>
                    </button>
                    {isOpen && (
                        <div className={s.sortbar__sorter_options}>
                            {options.map((option, i) => (
                                <button
                                    key={i}
                                    className={s.sortbar__sorter_option}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <button onClick={() => onApply(selectedOption, pathname)} className={s.sortbar__sorter_btn}>
                    Применить
                </button>
            </div>
            <p className={s.sortbar__text}>Общее кол-во товаров-<span>{totalProducts}</span></p>
        </div>
    )
}

export default Sortbar