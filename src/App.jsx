import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { getProducts, productsSelector } from "./store/products/productsSlice";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import { sortProducts } from "./utils/sortProducts";
import Cart from "./pages/Cart/Cart";

const App = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector(productsSelector);
  const [products, setProducts] = useState(null);
  const [opened, setOpened] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  const options = [
    { type: "price", label: "По цене" },
    { type: "title", label: "По наз-ю" },
    { type: "quantity", label: "По кол-ву" },
  ];

  const copyArr = (arr) => {
    if (!arr || !Array.isArray(arr)) return;

    const initArr = JSON.stringify(arr);
    const copiedArr = JSON.parse(initArr);

    return copiedArr;
  };

  const handleSelect = (productsArr, option) => {
    if (!productsArr) return;

    const sortedProducts = sortProducts(productsArr, option.type);
    setProducts([...sortedProducts]);
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
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  console.log(cartProducts);

  useEffect(() => {
    dispatch(getProducts());
    if (status === "ok") setProducts(copyArr(data));
  }, [status, dispatch]);

  const handleToggleClick = () => setOpened(!opened);
  const handleCloseClick = () => setOpened(false);

  return (
    <>
      <Header
        cartProductsAmount={cartProducts.length}
        onToggleClick={handleToggleClick}
        isOpened={opened}
      />
      <Sidebar isOpened={opened} onCloseClick={handleCloseClick} />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                options={options}
                products={products}
                onApply={handleSelect}
                onBuyClick={handleBuyClick}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                onApply={handleSelect}
                options={options}
                cartProducts={cartProducts}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
