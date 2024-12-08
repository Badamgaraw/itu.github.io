document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.getAttribute('data-name');
        const productPrice = this.getAttribute('data-price');

        window.alert(`"${productName}" added successfully!\nPrice: $${productPrice}`);
    });
});

const cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log('Loaded cart from localStorage:', cart);

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    alert(`${name} has been added to your cart!`);
}
function loadCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total");
    const checkoutButton = document.getElementById("checkout-button");

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty. Start adding items!</p>";
        totalDisplay.textContent = "Total: $0.00";
        checkoutButton.disabled = true;
        return;
    }

    let total = 0;
    cartItemsContainer.innerHTML = cart.map(item => {
        total += item.price * item.quantity;
        return `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
        `;
    }).join("");

    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
    checkoutButton.disabled = false;
}
function removeFromCart(name) {
    const itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    }
}
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);
        addToCart(name, price);
    });
});

loadCart();


