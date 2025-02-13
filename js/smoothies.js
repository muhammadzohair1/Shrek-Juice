const juices = [
    {
        "name": "Fruit-Based Smoothies",
        "image": "images/1.webp",
        "description": "A refreshing blend of frozen fruits, yogurt, & a hint of honey, perfect for a healthy & delicious treat. Bursting with natural flavors.",
        "price": "$5.00"
    },
    {
        "name": "Vegetable-Based Smoothies",
        "image": "images/2.webp",
        "description": "Vegetable smoothies are a great way to get a healthy dose of vitamins and minerals in a delicious and easy-to-drink form.",
        "price": "$6.00"
    },
    {
        "name": "Meal Replacement Smoothie",
        "image": "images/3.webp",
        "description": "Peanut butter smoothies are terrific meal replacement shakes because peanut butter is an excellent source of protein.",
        "price": "$7.00"
    },
    {
        "name": "Sugar-Free Smoothie",
        "image": "images/4.webp",
        "description": "This Sugar-Free Pumpkin Spicy Smoothie combines creamy, protein-packed deliciousness with the cozy flavors.",
        "price": "$8.00"
    },
    {
        "name": "Vegan Smoothie",
        "image": "images/5.webp",
        "description": "Vegan smoothies are plant-based, nutrient-packed drinks made with fruits, vegetables, & non-dairy milk. 🌱🍓",
        "price": "$6.50"
    },
    {
        "name": "Dragon Fruit Smoothie",
        "image": "images/6.webp",
        "description": "This Dragon Fruit Smoothie is not only amazing for your body, but it also tastes deliciously refreshing.",
        "price": "$5.50"
    },
    {
        "name": "Desert Smoothies",
        "image": "images/7.webp",
        "description": "This creamy brownie batter chocolate smoothie is packed with good-for-you ingredients but tastes like dessert! Have it.",
        "price": "$7.50"
    },
    {
        "name": "Detox Smoothie",
        "image": "images/8.webp",
        "description": "This Detox Smoothie recipe is loaded with nutrient-dense fruits & vegetables. It tastes great & will leave you feeling full & satisfied!",
        "price": "$6.00"
    }
];
// Function to generate juice cards dynamically
function renderJuiceCards() {
    const container = document.getElementById('smoothies-container');

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
