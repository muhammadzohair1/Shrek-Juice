const juices = [
    {
        "name": "Chocolate Pea Protein Shake (Vegan)",
        "image": "images/protein (1).webp",
        "description": "A Chocolate Pea Protein Shake is a delicious, plant-based beverage designed to provide a rich source of protein, ideal for vegans, vegetarians, or anyone seeking a dairy-free alternative.",
        "price": "$5.00"
    },
    {
        "name": "Chocolate Peppermint Protein Shake",
        "image": "images/protein (2).webp",
        "description": "The Chocolate Peppermint Protein Shake is a refreshing and indulgent beverage that combines the richness of chocolate with the cool, invigorating taste of peppermint.",
        "price": "$6.00"
    },
    {
        "name": "Almond Mango Protein Shake",
        "image": "images/protein (3).webp",
        "description": "1 shake of almond mango protein shake contains 304 Calories. The macronutrient breakdown is 54% carbs, 12% fat, and 34% protein. This is a good source of protein (48% of your Daily Value).",
        "price": "$7.00"
    },
    {
        "name": "Banana Protein Shake",
        "image": "images/protein (4).webp",
        "description": "This Banana Protein Shake is like drinking an old-fashioned banana milkshake, but healthy! It’s made with frozen bananas, yogurt, protein powder, nut butter, milk, warm spices, & vanilla.",
        "price": "$8.00"
    },
    {
        "name": "Oatmeal-Apple Protein Shake",
        "image": "images/protein (5).webp",
        "description": "The phytonutrients in the apple can help keep your blood sugar levels under control. Pair it up with milk and oatmeal for a thick breakfast protein shake that will keep you full for a long time.",
        "price": "$6.50"
    },
    {
        "name": "Almond-Cocoa Protein Shake",
        "image": "images/protein (6).webp",
        "description": "The Almond-Cocoa Protein Shake is a creamy and nutty beverage infused with the rich flavor of cocoa and the natural goodness of almonds. This shake is perfect for a healthy snack.",
        "price": "$5.50"
    },
    {
        "name": "Soy Milk-Strawberry Protein Shake",
        "image": "images/protein (7).webp",
        "description": "The Soy Milk-Strawberry Protein Shake is a light, fruity, and protein-rich beverage that combines the creamy texture of soy milk with the refreshing sweetness of strawberries.",
        "price": "$7.50"
    },
    {
        "name": "Peanut-Butter Coffee Protein Shake",
        "image": "images/protein (8).webp",
        "description": "The Peanut Butter Coffee Protein Shake is a creamy & energizing drink that combines the rich, nutty flavor of peanut butter with the bold kick of coffee. It keeps you energized & satisfied.",
        "price": "$6.00"
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
