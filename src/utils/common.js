export const setPriceBasedOnCurrency = (prices, currentCurrencySymbol) => {
    const price = prices.filter(({ currency }) => currency.symbol === currentCurrencySymbol)[0]
    return `${price.currency.symbol} ${price.amount}`;
}

export const calculateCartTotal = (cartItems = [], currentCurrencySymbol) => {
    let totalPrice = 0;
    cartItems.forEach(({ prices, quantity }) => {
        const { amount } = prices.filter(({ currency }) => currency.symbol === currentCurrencySymbol)[0];
        const totalItemPrice = amount * quantity;
        totalPrice += totalItemPrice;
    });

    console.log('Cart total: ', `${currentCurrencySymbol} ${totalPrice}`);

    return `${currentCurrencySymbol}${totalPrice.toFixed(2)}`;
}

export const calculateCartQuantity = (cartItems = []) => cartItems.reduce((a, b) => a + b.quantity, 0);