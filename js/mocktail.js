// Array of drink objects
const drinks = [
    {
        imgSrc: "images/Virgin Mojito.webp",
        alt: "Orange Juice",
        name: "Virgin Mojito",
        description: "A zesty mix of lime, mint, sugar, and soda water.",
        price: "$5.00",
        dataJuice: "Orange Juice"
    },
    {
        imgSrc: "images/Virgin Piña Colada.webp",
        alt: "Apple Juice",
        name: "Virgin Piña Colada",
        description: "A creamy blend of pineapple juice and coconut milk.",
        price: "$6.00",
        dataJuice: "Apple Juice"
    },
    {
        imgSrc: "images/Nojito.webp",
        alt: "Mango Juice",
        name: "Nojito",
        description: "A fruity twist on the Mojito with added fruit flavors like strawberry or mango.",
        price: "$7.00",
        dataJuice: "Mango Juice"
    },
    {
        imgSrc: "images/Shirley Temple.webp",
        alt: "Berry Juice",
        name: "Shirley Temple",
        description: "A sweet mix of grenadine, lemon-lime soda, and a maraschino cherry.",
        price: "$8.00",
        dataJuice: "Berry Juice"
    },
    {
        imgSrc: "images/Arnold Palmer.webp",
        alt: "Pineapple Juice",
        name: "Arnold Palmer",
        description: "A perfect balance of iced tea and lemonade.",
        price: "$6.50",
        dataJuice: "Pineapple Juice"
    },
    {
        imgSrc: "images/Fruit Punch.webp",
        alt: "Watermelon Juice",
        name: "Fruit Punch",
        description: "A tropical mix of various fruit juices like orange, pineapple, and mango.",
        price: "$5.50",
        dataJuice: "Watermelon Juice"
    },
    {
        imgSrc: "images/Lemon Cucumber Sparkler.webp",
        alt: "Pomegranate Juice",
        name: "Lemon Cucumber Sparkler",
        description: "A refreshing blend of lemon juice, cucumber, and sparkling water.",
        price: "$7.50",
        dataJuice: "Pomegranate Juice"
    },
    {
        imgSrc: "images/Watermelon Cooler.webp",
        alt: "Grape Juice",
        name: "Watermelon Cooler",
        description: "A hydrating mix of watermelon juice, mint, and lime.",
        price: "$6.00",
        dataJuice: "Grape Juice"
    }
];

// Get the container to render drink cards
const container = document.querySelector("#mockdrink-container");

// Generate HTML for each drink and add it to the container
drinks.forEach(drink => {
    const cardHTML = `
        <div class="juice-card">
            <img src="${drink.imgSrc}" alt="${drink.alt}">
            <h3>${drink.name}</h3>
            <p>${drink.description}</p>
            <span class="price">${drink.price}</span>
            <button class="add-to-cart bg-warning" data-juice="${drink.dataJuice}">Add to Cart</button>
        </div>
    `;
    container.innerHTML += cardHTML;
});
