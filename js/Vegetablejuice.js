const juices = [
    {
        "name": "Green Detox Elixir",
        "image": "images/Green Detox Elixir.webp",
        "description": "Cleanses, energizes, and refreshes with spinach, kale, and lemon.",
        "price": "$5.25"
    },
    {
        "name": "Beetroot Power Punch",
        "image": "images/Beetroot Power Punch.webp",
        "description": "Boosts stamina and revitalizes energy with beetroot and ginger.",
        "price": "$7.99"
    },
    {
        "name": "Cucumber Mint Cooler",
        "image": "images/Cucumber.webp",
        "description": "Refreshing, hydrating mix of cucumber, mint, and lime.",
        "price": "$4.75"
    },
    {
        "name": "Spinach & Kale Boost",
        "image": "images/Spinach & Kale Boost.webp",
        "description": "Strengthens immunity with spinach, kale, and green apple.",
        "price": "$9.50"
    },
    {
        "name": "Tomato Basil Refresher",
        "image": "images/Tomato Basil Refresher.webp",
        "description": "Savory blend of tomatoes, basil, and black pepper antioxidants.",
        "price": "$6.30"
    },
    {
        "name": "Celery Cleanse Juice",
        "image": "images/Celery Cleanse Juice.webp",
        "description": "Detoxifying, hydrating blend with celery, lemon, and green apple.",
        "price": "$8.45"
    },
    {
        "name": "Green Power Boost",
        "image": "images/Green Power Boost.webp",
        "description": "Energizing leafy greens that detoxify and revitalize naturally.",
        "price": "$3.99"
    },
    {
        "name": "Rooted Refresh",
        "image": "images/Rooted Refresh.webp",
        "description": "Earthy root vegetables to cleanse, hydrate, and refresh.",
        "price": "$10.00"
    }
];

// Function to generate juice cards dynamically
function renderJuiceCards() {
    const container = document.getElementById('Vegjuice-container');

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
    