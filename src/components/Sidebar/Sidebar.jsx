import { NavLink } from "react-router-dom";
import s from "./Sidebar.module.scss";

const Sidebar = ({ onCloseClick, isOpened }) => {
    const clsOpened = isOpened ? s.opened : '';
    
    return (
        <div className={`${s.sidebar} ${clsOpened}`} onClick={onCloseClick}>
            <aside className={s.sidebar__content} onClick={e => e.stopPropagation()}>
                <ul className={s.sidebar__list}>
                    <li className={s.sidebar__list_item}>
                        <NavLink to="/" onClick={onCloseClick} className={`${s.sidebar__list_link} navlink`}>
                            Главная
                        </NavLink>
                    </li>
                    <li className={s.sidebar__list_item}>
                        <NavLink to="/categories" onClick={onCloseClick} className={`${s.sidebar__list_link} navlink`}>
                            Категории
                        </NavLink>
                    </li>
                    <li className={s.sidebar__list_item}>
                        <NavLink to="/discounts" onClick={onCloseClick} className={`${s.sidebar__list_link} navlink`}>
                            Скидки
                        </NavLink>
                    </li>
                    <li className={s.sidebar__list_item}>
                        <NavLink to="/contacts" onClick={onCloseClick} className={`${s.sidebar__list_link} navlink`}>
                            Контакты
                        </NavLink>
                    </li>
                    <li className={s.sidebar__list_item}>
                        <NavLink to="/about" onClick={onCloseClick} className={`${s.sidebar__list_link} navlink`}>
                            О нас
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar