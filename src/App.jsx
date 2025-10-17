import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="container nav">
          <h1 className="logo">DMAX COFFEE COOKIES</h1>

          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <label htmlFor="nav-toggle" className="nav-icon">
            &#9776;
          </label>

          <nav className="nav-menu">
            <ul>
              <li>
                <a href="#home" className="active">
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

      <section id="home" className="hero">
        <div className="hero-container">
          <h2>Cookies with the Boldness of Coffee</h2>
          <p>
            Experience the perfect harmony of coffee aroma and cookie crunch
            with DMAX Coffee Cookies, baked to energize your day and delight
            your senses.
          </p>
          <a href="#shop" className="btn-primary">
            Order Now
          </a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>About Us</h2>
          <img
            src="dmax.jpg"
            alt="DMAX Coffee Cookies"
            className="about-image"
          />
          <p>
            At DMAX Coffee Cookies, we blend rich, roasted coffee beans into
            buttery cookie dough, creating an unforgettable fusion of flavors.
            Located in Makerere Kikoni, our bakery focuses on quality,
            freshness, and a bold coffee experience.
          </p>
        </div>
      </section>

      <section id="shop" className="shop">
        <div className="container">
          <h2>Our Cookies</h2>
          <div className="products">
            <div className="product">
              <img src="product2.jpeg" alt="Classic Coffee Cookie" />
              <h3>Classic Coffee Cookie</h3>
              <p>A perfect blend of espresso and dark chocolate chips.</p>
            </div>
            <div className="product">
              <img src="classic.jpg" alt="Mocha Crunch" />
              <h3>Mocha Crunch</h3>
              <p>Sweet meets bold — rich mocha flavor in every bite.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="blog">
        <div className="container">
          <h2>Our Blog</h2>
          <p>
            Explore cookie recipes, coffee pairings, and stories behind our
            bakery creations.
          </p>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>
            Visit us at Makerere Kikoni
            <br />
            📞 0753 590 735 / 0775 057 791
          </p>
          <a href="tel:0753590735" className="btn-primary">
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
