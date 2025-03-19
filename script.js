// Variáveis globais
let currentProduct = null;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartCount();

// Funções do Modal
function openModal(id, name, price) {
    currentProduct = { id, name, price };
    document.getElementById('quantity-modal').style.display = 'block';
    document.getElementById('quantity').value = 1;
}

function closeModal() {
    document.getElementById('quantity-modal').style.display = 'none';
    currentProduct = null;
}

function incrementQuantity() {
    const input = document.getElementById('quantity');
    if (input.value < 10) {
        input.value = parseInt(input.value) + 1;
    }
}

function decrementQuantity() {
    const input = document.getElementById('quantity');
    if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

// Funções do Carrinho
function addToCart() {
    if (!currentProduct) return;

    const quantity = parseInt(document.getElementById('quantity').value);
    const existingItem = cart.find(item => item.id === currentProduct.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: currentProduct.id,
            name: currentProduct.name,
            price: currentProduct.price,
            quantity: quantity
        });
    }

    // Salvar no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    updateCartCount();
    updateCartDisplay();
    closeModal();

    // Feedback visual
    alert('Produto adicionado ao carrinho!');
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function formatPrice(price) {
    return price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <h4>${item.name}</h4>
            <p>Quantidade: ${item.quantity}</p>
            <p>Preço unitário: ${formatPrice(item.price)}</p>
            <p>Subtotal: ${formatPrice(itemTotal)}</p>
            <button onclick="removeFromCart(${item.id})">Remover</button>
        `;
        cartItems.appendChild(itemElement);
    });

    cartTotal.textContent = formatPrice(total);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
}

function toggleCart() {
    const cartPanel = document.getElementById('shopping-cart');
    cartPanel.classList.toggle('active');
    updateCartDisplay();
}

// Fechar o carrinho quando clicar fora dele
document.addEventListener('click', (e) => {
    const cartPanel = document.getElementById('shopping-cart');
    const cartIcon = document.querySelector('.cart-icon');
    
    if (cartPanel.classList.contains('active') && 
        !cartPanel.contains(e.target) && 
        !cartIcon.contains(e.target)) {
        cartPanel.classList.remove('active');
    }
});

// Fechar o modal quando clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('quantity-modal');
    if (event.target == modal) {
        closeModal();
    }
}

// Inicializar o carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay();
});
