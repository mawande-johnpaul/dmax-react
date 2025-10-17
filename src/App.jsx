import "./App.css";

function App() {
  return (
    <>
      <header class="header">
        <div class="container nav">
          <h1 class="logo">DMAX COFFEE COOKIES</h1>

          <input type="checkbox" id="nav-toggle" class="nav-toggle"></input>
          <label for="nav-toggle" class="nav-icon">
            &#9776;
          </label>

          <nav class="nav-menu">
            <ul>
              <li>
                <a href="#home" class="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#shop">Shop</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" class="hero">
        <div class="hero-container">
          <h2>Cookies with the Boldness of Coffee</h2>
          <p>
            Experience the perfect harmony of coffee aroma and cookie crunch
            with DMAX Coffee Cookies, baked to energize your day and delight
            your senses.
          </p>
          <a href="#shop" class="btn-primary">
            Order Now
          </a>
        </div>
      </section>

      <section id="about" class="about">
        <div class="container" style="color: #fff;">
          <h2 style="color: #fff;">About Us</h2>
          <img
            src="dmax.jpg"
            alt="DMAX Coffee Cookies"
            style="width:300px; border-radius:10px; margin-bottom:1rem; border: 2px solid #fff;"
          ></img>
          <p>
            At DMAX Coffee Cookies, we blend rich, roasted coffee beans into
            buttery cookie dough, creating an unforgettable fusion of flavors.
            Located in Makerere Kikoni, our bakery focuses on quality,
            freshness, and a bold coffee experience.
          </p>
        </div>
      </section>

      <section id="shop" class="shop">
        <div class="container">
          <h2 style="color: #fff;">Our Cookies</h2>
          <div class="products">
            <div class="product">
              <img src="product2.jpeg" alt="Classic Coffee Cookie"></img>
              <h3>Classic Coffee Cookie</h3>
              <p>A perfect blend of espresso and dark chocolate chips.</p>
            </div>
            <div class="product">
              <img src="classic.jpg" alt="Mocha Crunch"></img>
              <h3>Mocha Crunch</h3>
              <p>Sweet meets bold — rich mocha flavor in every bite.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" class="blog">
        <div class="container">
          <h2 style="color: #fff;">Our Blog</h2>
          <p style="color: #fff;">
            Explore cookie recipes, coffee pairings, and stories behind our
            bakery creations.
          </p>
        </div>
      </section>

      <section id="contact" class="contact">
        <div class="container">
          <h2 style="color: #fff;">Contact Us</h2>
          <p style="color: #fff;">
            Visit us at Makerere Kikoni<br>📞 0753 590 735 / 0775 057 791</br>
          </p>
          <a href="tel:0753590735" class="btn-primary" style="color: #fff;">
            Call Now
          </a>
        </div>
      </section>

      <footer>
        <p>© 2025 DMAX Coffee Cookies | Crafted with ❤️ in Makerere Kikoni</p>
      </footer>
    </>
  );
}

export default App;
