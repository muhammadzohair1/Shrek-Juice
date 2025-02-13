let navbar = document.getElementById("navbarforindex");
navbar.innerHTML = `
 <nav class="navbar navbar-expand-lg" style="background-color: #e0a800; width: 100%;">
       <a class="navbar-brand" href="index.html">
           <img src="images/DDgopJ-removebg-preview.png" alt class="img-fluid mylogo">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fa-solid fa-bars"></span>
        </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="width: 100%; margin: 0; padding: 0;">
             <li class="nav-item">
               <a class="nav-link active" aria-current="page" href="index.html">Home</a>
             </li>
             <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Products & Menu
               </a>
               <ul class="dropdown-menu">
                 <li><a class="dropdown-item" href="FruitJuice.html">Fruit juices</a></li>
                 <li><a class="dropdown-item" href="VegetableJuices.html">Vegetable Juices</a></li>
                 <li><a class="dropdown-item" href="Smoothies.html">Smoothies</a></li>
                 <li><a class="dropdown-item" href="ProteinShakes.html">Protein Shakes</a></li>
                 <li><a class="dropdown-item" href="Wintermenu.html">Winter Menu</a></li>
                 <li><a class="dropdown-item" href="ChocolateJuices.html">Chocolate Juices</a></li>
                 <li><a class="dropdown-item" href="Mocktail.html">MockTail</a></li>
               </ul>
             </li>
             <li class="nav-item">
               <a class="nav-link active" aria-current="page" href="StoreLocation.html">Store Location</a>
             </li>
             <li class="nav-item">
               <a class="nav-link active" aria-current="page" href="Franchising.html">Franchising</a>
             </li>
             <li class="nav-item">
               <a class="nav-link active" aria-current="page" href="Catering.html">Catering</a>
             </li>
             <li class="nav-item">
               <a class="nav-link active" aria-current="page" href="contact.html">Contact</a>
               <li class="nav-item">
                 <a class="nav-link active" aria-current="page" href="Feedback.html">Feedback</a></li>
               <li class="nav-item">
                 <a class="nav-link active" aria-current="page" href="about.html">About Us</a></li>
             </li>
           </ul>
         </div>
     </nav>
`;
