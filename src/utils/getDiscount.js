export const getDiscount = (price, discountRate) => {
    if (!discountRate) return null;
    
    return price - ((price / 100) * discountRate);
}