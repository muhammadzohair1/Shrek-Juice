// JSON Data
const juiceCards = [
    {
        imgSrc: "images/black coffee.webp",
        alt: "Black coffee",
        name: "Black coffee",
        description: "Bold, rich, and invigorating, it's the perfect start to conquer the day.",
        price: "$5.00",
        dataJuice: "Orange Juice"
    },
    {
        imgSrc: "images/hot cocoa float.webp",
        alt: "Hot cocoa float",
        name: "Hot cocoa float",
        description: "Indulge in the creamy bliss of hot cocoa float, where warmth meets sweet, frothy perfection.",
        price: "$6.00",
        dataJuice: "Apple Juice"
    },
    {
        imgSrc: "images/hot cocoa.webp",
        alt: "Hot cocoa",
        name: "Hot cocoa",
        description: "A comforting hug in a cup, melting your worries with every sip.",
        price: "$7.00",
        dataJuice: "Mango Juice"
    },
    {
        imgSrc: "images/kashmiri chai.webp",
        alt: "Kashmiri chai",
        name: "Kashmiri chai",
        description: "A fragrant, creamy masterpiece that warms the soul with every sip.",
        price: "$8.00",
        dataJuice: "Berry Juice"
    },
    {
        imgSrc: "images/kehwa.webp",
        alt: "Kehwa",
        name: "Kehwa",
        description: "A soothing blend of spices and saffron, offering warmth and tranquility in every cup.",
        price: "$6.50",
        dataJuice: "Pineapple Juice"
    },
    {
        imgSrc: "images/tea.webp",
        alt: "Tea",
        name: "Tea",
        description: "A cup of tea is a hug in a mug, warming both the soul and the heart.",
        price: "$5.50",
        dataJuice: "Watermelon Juice"
    },
    {
        imgSrc: "images/warm cider.webp",
        alt: "Warm cider",
        name: "Warm cider",
        description: "A cozy, spiced embrace that fills you with comfort and the essence of autumn.",
        price: "$7.50",
        dataJuice: "Pomegranate Juice"
    },
    {
        imgSrc: "images/white coffee.webp",
        alt: "White coffee",
        name: "White coffee",
        description: "Smooth, creamy, and perfectly balanced, offering a gentle start to your day.",
        price: "$6.00",
        dataJuice: "Grape Juice"
    }
];

// Dynamically Render HTML
const container = document.querySelector("#juice-container"); // Add a container in your HTML with this ID

juiceCards.forEach(card => {
    const cardHTML = `
        <div class="juice-card">
            <img src="${card.imgSrc}" alt="${card.alt}">
            <h3>${card.name}</h3>
            <p>${card.description}</p>
            <span class="price">${card.price}</span>
            <button class="add-to-cart bg-warning" data-juice="${card.dataJuice}">Add to Cart</button>
        </div>
    `;
    container.innerHTML += cardHTML;
});
