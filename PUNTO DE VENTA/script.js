// Archivo: script.js

// Carrito inicial vacío
let cart = [];
let comments = []; // Array para almacenar los comentarios

// Función para agregar un producto al carrito
function addToCart(productName, productPrice) {
    const quantity = parseInt(event.target.previousElementSibling.value); // Selecciona la cantidad del producto
    const discount = generateRandomDiscount(); // Genera un descuento aleatorio
    const discountedPrice = productPrice - (productPrice * discount / 100); // Aplica el descuento al precio del producto
    cart.push({ name: productName, price: discountedPrice, quantity: quantity, discount: discount, comment: '' }); // Añade el producto al carrito
    updateCart(); // Actualiza el carrito en la interfaz
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    cart.splice(index, 1); // Elimina el producto del carrito
    updateCart(); // Actualiza la visualización del carrito
}

// Función para actualizar la visualización del carrito
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const total = document.getElementById('total');
    cartItems.innerHTML = ''; // Vacía la lista del carrito antes de agregar los elementos
    let totalAmount = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;
        const discountText = item.discount > 0 ? `Descuento: ${item.discount}%` : "Sin descuento";
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${itemTotal.toFixed(2)} (${discountText}) <button onclick="removeFromCart(${index})">Eliminar</button>`;
        cartItems.appendChild(li);
    });
    total.innerText = `Total: $${totalAmount.toFixed(2)}`;
    saveCart(); // Guarda el carrito en el almacenamiento local
}

// Función para vaciar el carrito
function clearCart() {
    cart = [];
    updateCart();
}

// Función para guardar el carrito en el almacenamiento local
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para cargar el carrito del almacenamiento local
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Llama a la función loadCart al cargar la página
window.onload = loadCart;

// Función para generar un descuento aleatorio
function generateRandomDiscount() {
    const random = Math.random();
    if (random < 0.7) { // 70% de probabilidad de 0% de descuento
        return 0;
    } else {
        return Math.floor(Math.random() * 16) + 5; // 30% de probabilidad de un descuento entre 5% y 20%
    }
}
// Función para actualizar la visualización de los comentarios
function updateComments() {
    const commentItems = document.getElementById('commentItems');
    commentItems.innerHTML = ''; // Limpia la lista de comentarios
    comments.forEach((comment, index) => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = `
            <p>${comment}</p>
            <button onclick="removeComment(${index})">Eliminar</button>
        `;
        commentItems.appendChild(commentDiv);
    });
}

// Función para agregar un nuevo comentario
function addComment() {
    const newComment = document.getElementById('newComment').value;
    if (newComment.trim()) {
        comments.push(newComment);
        document.getElementById('newComment').value = ''; // Limpiar el campo de entrada
        updateComments();
        saveComments(); // Guarda los comentarios en el almacenamiento local
    }
}

// Función para eliminar un comentario
function removeComment(index) {
    comments.splice(index, 1);
    updateComments();
    saveComments();
}

// Función para guardar los comentarios en el almacenamiento local
function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
}

// Función para cargar los comentarios del almacenamiento local
function loadComments() {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
        comments = JSON.parse(savedComments);
        updateComments();
    }
}

// Llama a la función loadComments al cargar la página
window.onload = function() {
    loadCart();
    loadComments();
};