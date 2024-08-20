import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getData, sortProducts } from "./store/products/productsSlice";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

import Cart from "./pages/Cart/Cart";
import { ProductsContext } from "./context/ProductsContext";
import { calcCurrentProducts } from "./utils/calcCurrentProducts";

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.value)
  const status = useSelector(state => state.products.status)
  const [opened, setOpened] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const {currentProducts, productsPerPage} = calcCurrentProducts(products, currentPage);



  const options = [
    { value: "price", label: "По цене" },
    { value: "title", label: "По наз-ю" },
    { value: "stock", label: "По кол-ву" },
  ];

  useEffect(() => {
    dispatch(getData());
  }, [dispatch, status]);

  const handleSelect = (option) => {
    if (!option) return;

    dispatch(sortProducts(option))
  };

  const handleBuyClick = (product) => {
    setCartProducts((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? {
              ...item,
              quantity:
                item.stock > item.quantity
                  ? item.quantity + 1
                  : item.quantity,
            }
            : item
        );
      } else {
        return [...prev, {
          ...product,
          quantity: 1,
        }];
      }
    });
  };

  const handleCartProductRemove = (product) => {
    const filteredCart = cartProducts.filter(item => item.id !== product.id);

    setCartProducts([...filteredCart])
  }



  const handleToggleClick = () => setOpened(!opened);
  const handleCloseClick = () => setOpened(false);
  const handleOrderClick = () => setCartProducts([]);
  const handlePaginate = (pageNum) => setCurrentPage(pageNum);


  return (
    <>
      <Header
        cartProductsAmount={cartProducts.length}
        onToggleClick={handleToggleClick}
        isOpened={opened}
      />
      <Sidebar isOpened={opened} onCloseClick={handleCloseClick} />
      <ProductsContext.Provider value={{
        options,
        products: currentProducts,
        onApply: handleSelect,
        onBuyClick: handleBuyClick,
        onCartProductRemove: handleCartProductRemove,
        productsPerPage,
        totalProducts: products?.length,
        onPaginate: handlePaginate,
        currentPage: currentPage,
      }}>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cartProducts={cartProducts}
                  onOrderClick={handleOrderClick}
                />
              }
            />
          </Routes>
        </div>
      </ProductsContext.Provider>
    </>
  );
};

export default App;
