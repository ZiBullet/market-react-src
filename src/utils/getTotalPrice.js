import {
    getDiscount
} from "./getDiscount";

export const getTotalPrice = (products) => {
    if (!products) return;
    
    let total = 0;
    products.forEach(product => {
        const discountPrice = getDiscount(
            product.price,
            product.discountPercentage
        ).toFixed(2);

        let temp = discountPrice * product.quantity;
        total += temp;
    });

    return total;
}