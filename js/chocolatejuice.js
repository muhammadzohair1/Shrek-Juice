// JSON Data
const chocolateDrinks = [
    {
        imgSrc: "images/chocolate banana milkshake.webp",
        alt: "Chocolate banana milkshake",
        name: "Chocolate banana milkshake",
        description: "A creamy, sweet blend of ripe bananas and milk, creating a smooth.",
        price: "$5.00",
        dataJuice: "Orange Juice"
    },
    {
        imgSrc: "images/Chocolate Chai Latte.webp",
        alt: "Chocolate Chai Latte",
        name: "Chocolate Chai Latte",
        description: "A warm, spiced beverage combining rich chocolate and aromatic chai tea.",
        price: "$6.00",
        dataJuice: "Apple Juice"
    },
    {
        imgSrc: "images/Chocolate Espresso Shake.webp",
        alt: "Chocolate Espresso Shake",
        name: "Chocolate Espresso Shake",
        description: "A deliciously creamy blend of espresso creating a perfect balance of coffee.",
        price: "$7.00",
        dataJuice: "Mango Juice"
    },
    {
        imgSrc: "images/Chocolate Hazelnut Drink.webp",
        alt: "Chocolate Hazelnut Drink",
        name: "Chocolate Hazelnut Drink",
        description: "A fragrant, creamy masterpiece that warms the soul with every sip.",
        price: "$8.00",
        dataJuice: "Berry Juice"
    },
    {
        imgSrc: "images/chocolate milk.webp",
        alt: "Chocolate milk",
        name: "Chocolate milk",
        description: "A sweet and creamy drink made by mixing milk with chocolate syrup.",
        price: "$6.50",
        dataJuice: "Pineapple Juice"
    },
    {
        imgSrc: "images/Chocolate protein Shake.webp",
        alt: "Chocolate protein Shake",
        name: "Chocolate protein Shake",
        description: "A rich, protein-packed drink made with chocolate and milk.",
        price: "$5.50",
        dataJuice: "Watermelon Juice"
    },
    {
        imgSrc: "images/hot chocolate.webp",
        alt: "Hot chocolate",
        name: "Hot chocolate",
        description: "A warm drink made with milk usually topped with whipped cream.",
        price: "$7.50",
        dataJuice: "Pomegranate Juice"
    },
    {
        imgSrc: "images/iced chocolate.webp",
        alt: "Iced chocolate",
        name: "Iced chocolate",
        description: "Smooth, creamy, and perfectly balanced, offering a gentle start to your day.",
        price: "$6.00",
        dataJuice: "Grape Juice"
    },
];

// Dynamically Render HTML
const container = document.querySelector("#chocolate-container"); // Add this container in your HTML

chocolateDrinks.forEach(drink => {
    const drinkHTML = `
        <div class="juice-card">
            <img src="${drink.imgSrc}" alt="${drink.alt}">
            <h3>${drink.name}</h3>
            <p>${drink.description}</p>
            <span class="price">${drink.price}</span>
            <button class="add-to-cart bg-warning" data-juice="${drink.dataJuice}">Add to Cart</button>
        </div>
    `;
    container.innerHTML += drinkHTML;
});
