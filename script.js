// Datos de productos según especificaciones
const productos = [
    {
        id: 'TC001',
        categoria: 'tortas-cuadradas',
        nombre: 'Torta Cuadrada de Chocolate',
        precio: '$45.000',
        descripcion: 'Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.',
        imagen: 'img/TC001.jpg'
    },
    {
        id: 'TC002',
        categoria: 'tortas-cuadradas',
        nombre: 'Torta Cuadrada de Frutas',
        precio: '$50.000',
        descripcion: 'Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.',
        imagen: 'img/TC002.jpg'
    },
    {
        id: 'TT001',
        categoria: 'tortas-circulares',
        nombre: 'Torta Circular de Vainilla',
        precio: '$40.000',
        descripcion: 'Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.',
        imagen: 'img/TT001.jpg'
    },
    {
        id: 'TT002',
        categoria: 'tortas-circulares',
        nombre: 'Torta Circular de Manjar',
        precio: '$42.000',
        descripcion: 'Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.',
        imagen: 'img/TT002.jpg'
    },
    {
        id: 'PI001',
        categoria: 'postres-individuales',
        nombre: 'Mousse de Chocolate',
        precio: '$5.000',
        descripcion: 'Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate.',
        imagen: 'img/PI001.jpg'
    },
    {
        id: 'PI002',
        categoria: 'postres-individuales',
        nombre: 'Tiramisú Clásico',
        precio: '$5.500',
        descripcion: 'Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida.',
        imagen: 'img/PI002.jpg'
    },
    {
        id: 'PSA001',
        categoria: 'sin-azucar',
        nombre: 'Torta Sin Azúcar de Naranja',
        precio: '$48.000',
        descripcion: 'Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables.',
        imagen: 'img/PSA001.jpg'
    },
    {
        id: 'PSA002',
        categoria: 'sin-azucar',
        nombre: 'Cheesecake Sin Azúcar',
        precio: '$47.000',
        descripcion: 'Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa.',
        imagen: 'img/PSA002.jpg'
    },
    {
        id: 'PT001',
        categoria: 'tradicional',
        nombre: 'Empanada de Manzana',
        precio: '$3.000',
        descripcion: 'Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.',
        imagen: 'img/PT001.jpg'
    },
    {
        id: 'PT002',
        categoria: 'tradicional',
        nombre: 'Tarta de Santiago',
        precio: '$6.000',
        descripcion: 'Tradicional tarta española hecha con almendras, azúcar, y huevos, una delicia para los amantes de los postres clásicos.',
        imagen: 'img/PT002.jpg'
    },
    {
        id: 'PG001',
        categoria: 'sin-gluten',
        nombre: 'Brownie Sin Gluten',
        precio: '$4.000',
        descripcion: 'Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor.',
        imagen: 'img/PG001.jpg'
    },
    {
        id: 'PG002',
        categoria: 'sin-gluten',
        nombre: 'Pan Sin Gluten',
        precio: '$3.500',
        descripcion: 'Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida.',
        imagen: 'img/PG002.jpg'
    },
    {
        id: 'PV001',
        categoria: 'vegana',
        nombre: 'Torta Vegana de Chocolate',
        precio: '$50.000',
        descripcion: 'Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos.',
        imagen: 'img/PV001.jpg'
    },
    {
        id: 'PV002',
        categoria: 'vegana',
        nombre: 'Galletas Veganas de Avena',
        precio: '$4.500',
        descripcion: 'Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano.',
        imagen: 'img/PV002.jpg'
    },
    {
        id: 'TE001',
        categoria: 'especiales',
        nombre: 'Torta Especial de Cumpleaños',
        precio: '$55.000',
        descripcion: 'Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos.',
        imagen: 'img/TE001.jpg'
    },
    {
        id: 'TE002',
        categoria: 'especiales',
        nombre: 'Torta Especial de Boda',
        precio: '$60.000',
        descripcion: 'Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda.',
        imagen: 'img/TE002.jpg'
    }
];

// Variables globales
let cart = [];
let user = null;
let currentProduct = null;

// Normalizar datos: crear un array `products` con claves en inglés y precio numérico
function parsePrice(precioStr) {
    if (typeof precioStr === 'number') return precioStr;
    // Eliminar todo lo que no sea dígito
    const digits = String(precioStr).replace(/[^0-9]/g, '');
    return digits ? parseInt(digits, 10) : 0;
}

const products = productos.map(p => ({
    id: p.id,
    category: p.categoria,
    name: p.nombre,
    price: parsePrice(p.precio),
    priceDisplay: p.precio,
    description: p.descripcion,
    image: p.imagen
}));

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    console.log('Inicializando aplicación...');
    setupEventListeners();
    loadCartFromStorage();
    loadUserSession(); // Cargar sesión de usuario
    updateCartDisplay();
    
    // Renderizar productos al cargar la página
    if (document.getElementById('productsGrid')) {
        renderProducts();
        console.log('Productos renderizados:', products.length);
    }
}

function setupEventListeners() {
    // Navegación móvil
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Modal de login
    const loginBtn = document.getElementById('loginBtn');
    
    loginBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'login.html';
    });
    
    // Cerrar modales
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.target.closest('.modal').style.display = 'none';
        });
    });

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Filtros de productos
    const filterBtns = document.querySelectorAll('.filter-btn');
    console.log('Botones de filtro encontrados:', filterBtns.length);
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log('Filtro clickeado:', btn.dataset.category);
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProducts(btn.dataset.category);
        });
    });

    // Búsqueda
    const searchInput = document.getElementById('searchInput');
    searchInput?.addEventListener('input', (e) => {
        searchProducts(e.target.value);
    });

            // Carrito
            const cartBtn = document.getElementById('cartBtn');
            
            cartBtn?.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'carrito.html';
            });    // Formularios
    setupAuthForms();

    // Verificar código promocional en tiempo real
    const promoCodeInput = document.getElementById('promoCode');
    promoCodeInput?.addEventListener('input', checkPromoCode);
}


function setupAuthForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        handleLogin(e);
    });

    registerForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        handleRegister(e);
    });
}

function switchTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const tabButtons = document.querySelectorAll('.tab-button');

    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    if (tab === 'login') {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        document.querySelector('[onclick="switchTab(\'login\')"]').classList.add('active');
    } else {
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
        document.querySelector('[onclick="switchTab(\'register\')"]').classList.add('active');
    }
}

function handleLogin(e) {
    const formData = new FormData(e.target);
    const email = formData.get('email') || e.target.querySelector('input[type="email"]').value;
    const password = formData.get('password') || e.target.querySelector('input[type="password"]').value;

    // Simulación de login exitoso
    user = {
        email: email,
        discounts: []
    };

    alert('Inicio de sesión exitoso');
    document.getElementById('loginModal').style.display = 'none';
    updateLoginDisplay();
}

function handleRegister(e) {
    const inputs = e.target.querySelectorAll('input');
    const name = inputs[0].value;
    const email = inputs[1].value;
    const birthDate = inputs[2].value;
    const promoCode = inputs[3].value;
    const password = inputs[4].value;

    // Calcular edad
    const age = calculateAge(new Date(birthDate));
    let discounts = [];

    // Aplicar descuentos según las reglas
    if (age >= 50) {
        discounts.push({ type: 'age50', description: 'Descuento 50% por ser mayor de 50 años', percentage: 50 });
    }

    if (promoCode === 'FELICES50') {
        discounts.push({ type: 'promo', description: 'Descuento 10% de por vida', percentage: 10 });
    }

    if (email.includes('@duocuc.cl')) {
        discounts.push({ type: 'student', description: 'Torta gratis en cumpleaños (estudiante Duoc)', percentage: 0, special: 'birthday_cake' });
    }

    user = {
        name: name,
        email: email,
        password: password,
        birthDate: birthDate,
        discounts: discounts
    };

    // Guardar usuario en localStorage para que el login pueda verificar credenciales
    localStorage.setItem('usuarioMilSabores', JSON.stringify(user));
    
    // También crear sesión activa
    localStorage.setItem('usuarioLogueado', JSON.stringify(user));

    alert('Registro exitoso. ' + (discounts.length > 0 ? 'Descuentos aplicados!' : ''));
    document.getElementById('loginModal').style.display = 'none';
    updateLoginDisplay();
}

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

function checkPromoCode() {
    const promoCodeInput = document.getElementById('promoCode');
    const discountInfo = document.getElementById('discountInfo');
    const code = promoCodeInput.value.trim();

    if (code === 'FELICES50') {
        discountInfo.innerHTML = '¡Código válido! Obtienes 10% de descuento de por vida';
        discountInfo.className = 'discount-info success';
        discountInfo.style.display = 'block';
    } else if (code && code !== 'FELICES50') {
        discountInfo.innerHTML = 'Código no válido';
        discountInfo.className = 'discount-info error';
        discountInfo.style.display = 'block';
    } else {
        discountInfo.style.display = 'none';
    }
}

function updateLoginDisplay() {
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn && user) {
        loginBtn.textContent = `Cerrar sesión: ${user.name || user.email}`;
        loginBtn.href = '#';
        loginBtn.onclick = (e) => {
            e.preventDefault();
            logout();
        };
        console.log('Interfaz de login actualizada para usuario:', user.name || user.email);
    }
}

function logout() {
    user = null;
    localStorage.removeItem('usuarioLogueado');
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.textContent = 'Iniciar Sesión';
        loginBtn.href = 'login.html';
        loginBtn.onclick = null;
    }
    console.log('Usuario deslogueado');
    alert('Sesión cerrada');
}

function renderProducts(productsToRender = products) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) {
        console.error('No se encontró el elemento productsGrid');
        return;
    }
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<p style="text-align:center; margin:2rem; font-size:1.2rem;">No hay productos en esta categoría.</p>';
        return;
    }
    
    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" style="width:100%;height:150px;object-fit:cover;border-radius:8px;">
            </div>
                <div class="product-content">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${getCategoryName(product.category)}</p>
                <p class="product-description">${product.description}</p>
                <p class="price">$${product.price.toLocaleString('es-CL')} CLP</p>
                <div class="product-buttons">
                  <button class="view-btn" onclick="event.stopPropagation(); openProductModal('${product.id}')">Ver más</button>
                  <button class="add-btn" onclick="event.stopPropagation(); addProductById('${product.id}')">Agregar</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Nueva función para agregar producto al carrito desde el botón
function addProductToCart(productId) {
    const product = productos.find(p => p.id === productId);
    if (!product) return;

    // Por defecto cantidad 1 y sin mensaje personalizado
    const cartItem = {
        id: product.id,
        name: product.nombre,
        price: parseInt(product.precio.replace(/\D/g, '')),
        quantity: 1,
        customMessage: '',
        image: product.imagen
    };

    const existingItemIndex = cart.findIndex(item => item.id === cartItem.id && item.customMessage === cartItem.customMessage);
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push(cartItem);
    }

    updateCartDisplay();
    saveCartToStorage();

    alert('Producto agregado al carrito');
}

function getCategoryName(category) {
    const categoryNames = {
        'tortas-cuadradas': 'Tortas Cuadradas',
        'tortas-circulares': 'Tortas Circulares',
        'postres-individuales': 'Postres Individuales',
        'sin-azucar': 'Sin Azúcar',
        'tradicional': 'Pastelería Tradicional',
        'sin-gluten': 'Sin Gluten',
        'vegana': 'Vegana',
        'especiales': 'Tortas Especiales'
    };
    return categoryNames[category] || category;
}

function filterProducts(category) {
    console.log('Filtrando por categoría:', category);
    console.log('Productos disponibles:', products.length);
    
    if (category === 'all') {
        console.log('Mostrando todos los productos');
        renderProducts(products);
    } else {
        const filtered = products.filter(product => product.category === category);
        console.log('Productos filtrados:', filtered.length);
        renderProducts(filtered);
    }
}

// Evento para los botones de filtro
// (Los listeners de filtro se agregan en setupEventListeners)

// Búsqueda
function searchProducts(query) {
    if (!query.trim()) {
        renderProducts(products);
        return;
    }

    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        getCategoryName(product.category).toLowerCase().includes(query.toLowerCase())
    );
    
    renderProducts(filtered);
}

        function openProductModal(productId) {
            currentProduct = products.find(p => p.id === productId);
            if (!currentProduct) return;

            // Llenar el modal con la información del producto
            document.getElementById('modalProductName').textContent = currentProduct.name;
            document.getElementById('modalProductPrice').textContent = `$${currentProduct.price.toLocaleString('es-CL')} CLP`;
            document.getElementById('modalProductDescription').textContent = currentProduct.description;
            document.getElementById('modalProductImage').src = currentProduct.image;
            document.getElementById('modalProductImage').alt = currentProduct.name;
            
            // Resetear los valores del modal
            document.getElementById('quantity').value = 1;
            document.getElementById('customMessage').value = '';
            
            // Mostrar el modal
            document.getElementById('productModal').style.display = 'block';
        }
        
function changeQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    const currentValue = parseInt(quantityInput.value);
    const newValue = Math.max(1, currentValue + change);
    quantityInput.value = newValue;
}

// Agregar al carrito desde el grid (sin abrir modal)
function addProductById(productId) {
    const prod = products.find(p => p.id === productId);
    if (!prod) return;

    const cartItem = {
        id: prod.id,
        name: prod.name,
        price: prod.price,
        quantity: 1,
        customMessage: '',
        image: prod.image
    };

    const existingItemIndex = cart.findIndex(item => item.id === cartItem.id && item.customMessage === cartItem.customMessage);
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push(cartItem);
    }

    updateCartDisplay();
    saveCartToStorage();
    // Pequeña confirmación no intrusiva
    // Usamos alert por simplicidad; puedes reemplazar por un toast si prefieres
    // Evitar redirigir automáticamente
    alert('Producto agregado al carrito');
}

// Asegurarse de que al guardar/cargar el carrito se conserve la estructura correcta
function saveCartToStorage() {
    try {
        localStorage.setItem('milsabores_cart', JSON.stringify(cart));
    } catch (err) {
        console.warn('No se pudo guardar el carrito en localStorage', err);
    }
}

function loadCartFromStorage() {
    try {
        const saved = localStorage.getItem('milsabores_cart');
        if (saved) {
            const parsed = JSON.parse(saved);
            // Normalizar elementos antiguos sin image o con price string
            cart = parsed.map(item => ({
                id: item.id,
                name: item.name,
                price: typeof item.price === 'number' ? item.price : parsePrice(item.price || item.priceDisplay || '0'),
                quantity: item.quantity || 1,
                customMessage: item.customMessage || '',
                image: item.image || (products.find(p => p.id === item.id)?.image || '')
            }));
        } else {
            cart = [];
        }
    } catch (err) {
        console.warn('No se pudo cargar el carrito desde localStorage', err);
        cart = [];
    }
}

function loadUserSession() {
    try {
        const savedUser = localStorage.getItem('usuarioLogueado');
        if (savedUser) {
            user = JSON.parse(savedUser);
            console.log('Sesión de usuario cargada:', user);
            updateLoginDisplay();
        }
    } catch (err) {
        console.warn('No se pudo cargar la sesión de usuario', err);
        user = null;
    }
}

function addToCart() {
    if (!currentProduct) return;

    const quantity = parseInt(document.getElementById('quantity').value);
    const customMessage = document.getElementById('customMessage').value.trim();

    const cartItem = {
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        quantity: quantity,
        customMessage: customMessage,
        image: currentProduct.image
    };

    // Verificar si el producto ya está en el carrito
    const existingItemIndex = cart.findIndex(item => 
        item.id === cartItem.id && item.customMessage === cartItem.customMessage
    );

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push(cartItem);
    }

    updateCartDisplay();
    saveCartToStorage();
    
    alert('Producto agregado al carrito');
    document.getElementById('productModal').style.display = 'none';
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const subtotalEl = document.getElementById('subtotal');
    const discountAmountEl = document.getElementById('discountAmount');
    const discountLineEl = document.getElementById('discountLine');
    const totalEl = document.getElementById('total');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #B0BEC5; margin: 2rem 0;">Tu carrito está vacío</p>';
        subtotalEl.textContent = '0';
        totalEl.textContent = '0';
        discountLineEl.style.display = 'none';
        return;
    }

    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-thumb">
                <img src="${item.image}" alt="${item.name}" style="width:60px;height:60px;object-fit:cover;border-radius:6px;margin-right:8px;">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-details">
                    Cantidad: ${item.quantity}
                    ${item.customMessage ? `<br>Mensaje: "${item.customMessage}"` : ''}
                </div>
            </div>
            <div class="cart-item-price">$${(item.price * item.quantity).toLocaleString('es-CL')}</div>
            <button class="remove-item" onclick="removeFromCart(${index})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountData = calculateDiscount(subtotal);
    const total = subtotal - discountData.amount;

    subtotalEl.textContent = subtotal.toLocaleString('es-CL');
    totalEl.textContent = total.toLocaleString('es-CL');

    if (discountData.amount > 0) {
        discountAmountEl.textContent = discountData.amount.toLocaleString('es-CL');
        discountLineEl.style.display = 'block';
    } else {
        discountLineEl.style.display = 'none';
    }
}

function calculateDiscount(subtotal) {
    if (!user || !user.discounts) {
        return { amount: 0, description: '' };
    }

    let maxDiscount = 0;
    let description = '';

    user.discounts.forEach(discount => {
        if (discount.type === 'age50' && discount.percentage > maxDiscount) {
            maxDiscount = discount.percentage;
            description = discount.description;
        } else if (discount.type === 'promo' && discount.percentage > maxDiscount) {
            maxDiscount = discount.percentage;
            description = discount.description;
        }
    });

    const discountAmount = subtotal * (maxDiscount / 100);
    return { amount: discountAmount, description: description };
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCartToStorage();
    updateCartDisplay();
    // Si estamos en la página de carrito usa su renderer, si no usa el renderer genérico
    if (typeof window.renderCartPage === 'function') {
        window.renderCartPage();
    } else if (typeof window.renderCart === 'function') {
        window.renderCart();
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }

    if (!user) {
        alert('Debes iniciar sesión para realizar una compra');
        document.getElementById('cartModal').style.display = 'none';
        document.getElementById('loginModal').style.display = 'block';
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountData = calculateDiscount(subtotal);
    const total = subtotal - discountData.amount;

    // Generar número de orden
    const orderNumber = 'ORD-' + Date.now();

    let orderSummary = `¡Pedido confirmado!\n\n`;
    orderSummary += `Número de orden: ${orderNumber}\n`;
    orderSummary += `Cliente: ${user.name || user.email}\n\n`;
    orderSummary += `Productos:\n`;
    
    cart.forEach(item => {
        orderSummary += `- ${item.name} (x${item.quantity}): $${(item.price * item.quantity).toLocaleString('es-CL')}\n`;
        if (item.customMessage) {
            orderSummary += `  Mensaje: "${item.customMessage}"\n`;
        }
    });
    
    orderSummary += `\nSubtotal: $${subtotal.toLocaleString('es-CL')}\n`;
    if (discountData.amount > 0) {
        orderSummary += `Descuento: -$${discountData.amount.toLocaleString('es-CL')}\n`;
    }
    orderSummary += `Total: $${total.toLocaleString('es-CL')}\n\n`;
    orderSummary += `Estado: En preparación\n`;
    orderSummary += `Tiempo estimado: 2-3 días hábiles`;

    alert(orderSummary);

    // Limpiar carrito
    cart = [];
    updateCartDisplay();
    saveCartToStorage();
    document.getElementById('cartModal').style.display = 'none';
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Smooth scrolling para enlaces de navegación
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Cerrar menú móvil si está abierto
                const navMenu = document.querySelector('.nav-menu');
                navMenu.classList.remove('active');
            }
        });
    });
});

// Animaciones al hacer scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos que se deben animar
    const elementsToAnimate = document.querySelectorAll('.product-card, .about-text, .contact-form');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Inicializar animaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', setupScrollAnimations);

// Manejo del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name') || this.querySelector('input[placeholder="Nombre"]').value;
        const email = formData.get('email') || this.querySelector('input[placeholder="Correo electrónico"]').value;
        const message = formData.get('message') || this.querySelector('textarea').value;
        
        // Simulación de envío de formulario
        alert(`¡Gracias por tu mensaje, ${name}!\n\nNos pondremos en contacto contigo pronto a ${email}.`);
        
        // Limpiar formulario
        this.reset();
    });
});
