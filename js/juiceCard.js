let myJuiceCard = document.getElementById('myJucCard');


let juiceProducts = [
    {
        name: "Carrot Juice",
        price: 50,
        description: "A nutritious juice full of beta-carotene that supports eye health and boosts skin glow.",
        imgSrc: "images/Carrot Juice.webp"
    },
    {
        name: "Watermelon Juice",
        price: 50,
        description: "A hydrating juice that's refreshing and packed with vitamins A and C, perfect for summer.",
        imgSrc: "images/Watermelon Juice.webp"
    },
    {
        name: "Pomegranate Juice",
        price: 50,
        description: "A tart and tangy juice with powerful antioxidants that may help reduce inflammation.",
        imgSrc: "images/Pomegranate Juice.webp"
    },
    {
        name: "Lemon Juice",
        price: 50,
        description: "A sour and refreshing juice, packed with Vitamin C, ideal for detoxifying and boosting immunity.",
        imgSrc: "images/Lemon Juice.webp"
    },
    {
        name: "Cucumber Juice",
        price: 50,
        description: "A light and cooling juice, perfect for hydration and offering a good amount of vitamins and minerals.",
        imgSrc: "images/Cucumber Juice.webp"
    },
    {
        name: "Beetroot Juice",
        price: 50,
        description: "A vibrant red juice, packed with nitrates that may help improve blood flow and lower blood pressure.",
        imgSrc: "images/Beetroot Juice.webp"
    },
    {
        name: "Tomato Juice",
        price: 50,
        description: "A tangy juice filled with antioxidants like lycopene, which may contribute to heart health and skin protection.",
        imgSrc: "images/Tomato Juice.webp"
    },
    {
        name: "Warm cider",
        price: 50,
        description: "A cozy, spiced embrace that fills you with comfort and the essence of autumn.",
        imgSrc: "images/warm cider.webp"
    },
    {
        name: "White coffee",
        price: 50,
        description: "A Smooth, creamy, and perfectly balanced, offering a gentle start to your day.",
        imgSrc: "images/white coffee.webp"
    },
    {
        name: "Chocolate banana milkshake",
        price: 50,
        description: "A creamy, sweet blend of ripe bananas and milk, creating a smooth.",
        imgSrc: "images/chocolate banana milkshake.webp"
    },
    {
        name: "Chocolate Chai Latte",
        price: 50,
        description: "A warm, spiced beverage combining rich chocolate and aromatic chai tea.",
        imgSrc: "images/Chocolate Chai Latte.webp"
    },
    {
        name: "Chocolate Espresso Shake",
        price: 50,
        description: "A deliciously creamy blend of espresso creating a perfect balance of coffee.",
        imgSrc: "images/Chocolate Espresso Shake.webp"
    },
    {
        name: "Chocolate Hazelnut Drink",
        price: 50,
        description: "A fragrant, creamy masterpiece that warms the soul with every sip.",
        imgSrc: "images/chocolate Hazelnut Drink.webp"
    },
    {
        name: "Chocolate milk",
        price: 50,
        description: "A sweet and creamy drink made by mixing milk with chocolate syrup.",
        imgSrc: "images/Chocolate milk.webp"
    },
    {
        name: "Chocolate protein Shake",
        price: 50,
        description: "A rich, protein-packed drink made with chocolate and milk.",
        imgSrc: "images/Chocolate protein Shake.webp"
    },
    {
        name: "Hot chocolate",
        price: 50,
        description: "A warm drink made with milk usually topped with whipped cream.",
        imgSrc: "images/Hot chocolate.webp"
    },
    {
        name: "Iced chocolate",
        price: 50,
        description: "A refreshing citrus juice, rich in Vitamin C that boosts the immune system.",
        imgSrc: "images/Iced chocolate.webp"
    },
    {
        name: "Orange Juice",
        price: 50,
        description: "A refreshing citrus juice, rich in Vitamin C that boosts the immune system.",
        imgSrc: "images/Orange Juice.webp"
    },
    {
        name: "Apple Juice",
        price: 50,
        description: "A sweet and mildly tangy juice, packed with antioxidants and dietary fiber.",
        imgSrc: "images/Apple Juice.webp"
    },
    {
        name: "Pineapple Juice",
        price: 50,
        description: "A tropical juice with a zesty, sweet flavor that aids digestion and reduces inflammation.",
        imgSrc: "images/pineapple Juice.webp"
    },
    {
        name: "Mango Juice",
        price: 50,
        description: "A rich, creamy juice made from ripe mangoes, known for its high vitamin A and C content.",
        imgSrc: "images/mango Juice.webp"
    },
    {
        name: "Grape Juice",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/grape Juice.webp"
    },
    {
        name: "Spinach Juice",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/spanish juice.webp"
    },
    {
        name: "Celery Juice",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Celery Juice.webp"
    },
    {
        name: "Kale Juice",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Kale Juice.webp"
    },
    {
        name: "Ginger Carrot Juice",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/ginger carrot juice.webp"
    },
    {
        name: "Lettuce Juice",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Lettuce Juice.webp"
    },
    {
        name: "Pumpkin Juice",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Pumpkin Juice.webp"
    },
    {
        name: "Radish Juice",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/radish juice.jpeg"
    },
    {
        name: "Sweet Potato Juice",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Sweet Potato Juice.webp"
    },
    {
        name: "Virgin Mojito",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Virgin Mojito.webp"
    },
    {
        name: "Fruit Punch",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Fruit Punch.webp"
    },
    {
        name: "Shirley Temple",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Shirley Temple.webp"
    },
    {
        name: "Virgin Piña Colada",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Virgin Piña Colada.webp"
    },
    {
        name: "Cucumber Cooler",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Cucumber Cooler.webp"
    },
    {
        name: "Sunset Cooler",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Sunset Cooler.webp"
    },
    {
        name: "Berry Lemonade",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Berry Lemonade.webp"
    },
    {
        name: "Tropical Fizz",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Tropical Fizz.webp"
    },
    {
        name: "Raspberry Mint Sparkler",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/raspberry Mint Sparkler.webp"
    },
    {
        name: "Citrus Spritzer",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Citrus Spritzer.webp"
    },
    {
        name: "Mango Mania",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Mango-Mania.webp"
    },
    {
        name: "Berry Blast",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Berry Blast.webp"
    },
    {
        name: "Green Goddess",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Green-Goddess.webp"
    },
    {
        name: "Tropical Paradise",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Tropical-Paradise.webp"
    },
    {
        name: "Peanut Butter Banana",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Peanut-Butter-Banana.webp"
    },
    {
        name: "Avocado Dream",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Avocado Dream.webp"
    },
    {
        name: "Peach Perfection",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Peach-Perfection.webp"
    },
    {
        name: "Chocolate Banana",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Chocolate-Banana.webp"
    },
    {
        name: "Berry Almond Delight",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Berry Almond Delight.webp"
    },
    {
        name: "Citrus Burst",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Citrus-Burst.webp"
    },
    {
        name: "Peach Juice",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Peach-Juice.webp"
    },
    {
        name: "Guava Juice",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Guava Juice.webp"
    },
    {
        name: "Cherry Juice",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Cherry Juice.webp"
    },
    {
        name: "Strawberry Juice",
        price: 50,
        description: "A naturally sweet juice, loaded with antioxidants that help promote heart health.",
        imgSrc: "images/Strawberry-Juice.webp"
    },
];

for (let i = 0; i < juiceProducts.length; i++) {
    let juice = juiceProducts[i];

    let cardHTML = `
      <div class="col-md-4">
                  <div class="our_main_box">
                     <div class="our_img">
                        <figure><img src="${juice.imgSrc}" alt="#" width="100%" style="height: 250px !important;"/></figure>
                     </div>
                     <div class="our_text">
                        <h4>$<strong class="yellow">${juice.price}</strong></h4>
                        <h3>${juice.name}</h3>
                        <p>${juice.description}</p>
                        <a class="read_more bg-warning" href="JuiceForm.html">Order Now</a>
                     </div>
                  </div>
               </div>
               
    `;
    myJuiceCard.innerHTML += cardHTML;
}

