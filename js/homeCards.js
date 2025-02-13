let myCard = document.getElementById('myCusCard');

let products = [
    {
        name: "Black Coffee",
        price: 50,
        description: "A bold, rich, and invigorating beverage to start your day.",
        imgSrc: "images/black coffee.webp"
    },
    {
        name: "Hot cocoa float",
        price: 50,
        description: "Indulge in the creamy bliss of hot cocoa float—the perfect combination of warmth and sweet decadence.",
        imgSrc: "images/hot cocoa float.webp"
    },
    {
        name: "Hot cocoa",
        price: 50,
        description: "A comforting hug in a cup, melting your worries with every sip.",
        imgSrc: "images/hot cocoa.webp"
    },
    {
        name: "Kashmiri chai",
        price: 50,
        description: "A fragrant, creamy masterpiece that warms the soul with every sip.",
        imgSrc: "images/kashmiri chai.webp"
    },
    {
        "name": "Kehwa",
        "price": 50,
        "image": "./images/kehwa.webp"
      },      
    {
        name: "Tea",
        price: 50,
        description: "A cup of tea is a hug in a mug, warming both the soul and the heart.",
        imgSrc: "images/tea.webp"
    }
];

for (let i = 0; i < products.length; i++) {
    let product = products[i];

    let cardHTML = `
      <div class="col-md-4" style="padding: 0.5rem; box-sizing: border-box;">
          <div class="our_main_box" style="height: 100%; display: flex; flex-direction: column; justify-content: space-between; border: 1px solid #f1f1f1; padding: 1rem; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
              <div class="our_img" style="width: 100%; height: auto;">
                  <figure><img src="${product.imgSrc}" alt="${product.name}" style="width: 100%; height: 250px; object-fit: cover;"></figure>
              </div>
              <div class="our_text" style="padding-top: 1rem; text-align: center;">
                  <h4 style="margin-bottom: 0;"><strong class="yellow" style="color: orange;">${product.price}</strong></h4>
                  <h3 style="margin-bottom: 1rem;">${product.name}</h3>
                  <p style="margin-bottom: 1rem; overflow: hidden; text-overflow: ellipsis;">${product.description}</p>
                  <a class="read_more" href="juiceform.html" style="margin-top: 1rem; display: inline-block; padding: 0.5rem 1rem; background-color: orange; color: #fff; text-decoration: none; border-radius: 4px; transition: background-color 0.3s;">Order Now</a>
              </div>
          </div>
      </div>
    `;

    // Append the card HTML to the myCard container
    myCard.innerHTML += cardHTML;
}


