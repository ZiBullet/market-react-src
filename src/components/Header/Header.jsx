import { Link, NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import logo from "../../assets/imgs/logo.png";
import cartIcon from "../../assets/icons/cart.svg";

const Header = ({ onToggleClick, isOpened, cartProductsAmount }) => {
  const clsOpened = isOpened ? s.opened : "";

  return (
    <header className={s.header}>
      <nav className={`${s.header__nav} container`}>
        <Link to="/" className={s.header__logo}>
          <img src={logo} alt="logo" />
        </Link>
        <ul className={s.header__list}>
          <li className={s.header__list_item}>
            <NavLink to="/" className={`${s.header__list_link} navlink`}>
              Главная
            </NavLink>
          </li>
          <li className={s.header__list_item}>
            <NavLink
              to="/categories"
              className={`${s.header__list_link} navlink`}
            >
              Категории
            </NavLink>
          </li>
          <li className={s.header__list_item}>
            <NavLink
              to="/discounts"
              className={`${s.header__list_link} navlink`}
            >
              Скидки
            </NavLink>
          </li>
          <li className={s.header__list_item}>
            <NavLink
              to="/contacts"
              className={`${s.header__list_link} navlink`}
            >
              Контакты
            </NavLink>
          </li>
          <li className={s.header__list_item}>
            <NavLink to="/about" className={`${s.header__list_link} navlink`}>
              О нас
            </NavLink>
          </li>
        </ul>
        <div className={s.header__btns}>
          <Link to="/cart" className={s.header__cart}>
            <img src={cartIcon} alt="cart" />
            {cartProductsAmount ? <span>{cartProductsAmount}</span> : ""}
          </Link>
          <button
            onClick={onToggleClick}
            className={`${s.header__btn} ${clsOpened}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
