const juices = [
    {
        "name": "Orange Juice",
        "image": "images/orange juice.webp",
        "description": "Freshly squeezed oranges for a refreshing taste.",
        "price": "$5.00"
    },
    {
        "name": "Apple Juice",
        "image": "images/apple juice.webp",
        "description": "Pure apple goodness in every sip.",
        "price": "$6.00"
    },
    {
        "name": "Mango Juice",
        "image": "images/mango juice.webp",
        "description": "Sweet and juicy mangoes blended to perfection.",
        "price": "$7.00"
    },
    {
        "name": "Berry Juice",
        "image": "images/berry juice.jpg",
        "description": "A mix of berries for a burst of flavor.",
        "price": "$8.00"
    },
    {
        "name": "Pineapple Juice",
        "image": "images/pineapple juice.webp",
        "description": "Tropical pineapples for a tangy delight.",
        "price": "$6.50"
    },
    {
        "name": "Watermelon Juice",
        "image": "images/watermelon juice.webp",
        "description": "Refreshing watermelon for a cool treat.",
        "price": "$5.50"
    },
    {
        "name": "Pomegranate Juice",
        "image": "images/Pomegranate juice.webp",
        "description": "Rich in antioxidants and flavor.",
        "price": "$7.50"
    },
    {
        "name": "Grape Juice",
        "image": "images/grape juice.webp",
        "description": "A sweet and tangy grape experience.",
        "price": "$6.00"
    }
];

// Function to generate juice cards dynamically
function renderJuiceCards() {
    const container = document.getElementById('juice-container');

    juices.forEach(juice => {
        const juiceCard = document.createElement('div');
        juiceCard.classList.add('juice-card');

        juiceCard.innerHTML = `
            <img src="${juice.image}" alt="${juice.name}">
            <h3>${juice.name}</h3>
            <p>${juice.description}</p>
            <span class="price">${juice.price}</span>
            <button class="add-to-cart bg-warning" data-juice="${juice.name}">Add to Cart</button>
        `;

        container.appendChild(juiceCard);
    });
}

// Call the function to render juice cards
renderJuiceCards();