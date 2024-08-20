import {
    useState
} from "react";

export const calcCurrentProducts = (products, currentPage) => {
    const [productsPerPage] = useState(12);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products?.slice(indexOfFirstProduct, indexOfLastProduct);
    
    return {
        currentProducts,
        productsPerPage
    }
}