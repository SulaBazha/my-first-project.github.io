let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `<span>${item.name}</span><span>${item.price} тг</span>`;
        cartItems.appendChild(div);
    });

    document.getElementById('totalPrice').innerText = `Итого: ${total} тг`;
}
