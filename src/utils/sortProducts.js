const sorter = (arr, key, direction) => {
    const sortedArr = arr.sort((a, b) => {
        if (a[key] > b[key]) {
            return 1 * direction;
        }
        if (a[key] < b[key]) {
            return -1 * direction;
        }
        return 0;
    })

    return sortedArr;
}

export const sortProducts = (products = null, typeOfSorting = null) => {
    if (!products || !typeOfSorting) return;

    const sortedProducts =
        typeOfSorting === "price" ? sorter(products, "price", -1) :
        typeOfSorting === "title" ? sorter(products, "title", 1) :
        sorter(products, "stock", -1);

    return sortedProducts;
}