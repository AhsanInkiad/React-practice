// use local storage to manage cart data

const addToDb = id => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
        cart = {};
    }
    const quantity = cart[id];

    if (quantity) {
        const x = parseInt(quantity) + 1;
        cart[id] = x;
    } else {
        cart[id] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));

}

export { addToDb }