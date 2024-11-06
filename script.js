document.addEventListener('DOMContentLoaded', () => {
    // Fetch beauty products from Makeup API
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
        .then(response => response.json())
        .then(products => {
            const productContainer = document.getElementById('product-container');
            products.slice(0, 6).forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                productDiv.innerHTML = `
                    <img src="${product.image_link}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.price ? `$${product.price}` : "Price Unavailable"}</p>
                `;
                productContainer.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error fetching products:', error));     

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formMessage = document.getElementById('form-message');

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            formMessage.textContent = 'Thank you for reaching out! We’ll get back to you soon.';
            contactForm.reset();
        } else {
            formMessage.textContent = 'Please fill out all fields.';
        }
    });
});