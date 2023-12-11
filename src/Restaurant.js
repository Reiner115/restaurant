import { useEffect , useRef } from "react";
import "./restaurant.css";
import food1 from "./assets/food1.png";
import food2 from "./assets/food2.png";
import food3 from "./assets/food3.png";
import food4 from "./assets/food4.png";
import aboutImage from "./assets/panzanella salad.jpg";
const Restaurant = () => {

    const menuRef = useRef();

    const toglleMenu = ()=>{
        const nav = menuRef.current;
        if ( nav) {
                console.log(nav.classList)
              if( nav.classList.contains("show-menu"))
                  nav.classList.remove("show-menu");
              else
                  nav.classList.add("show-menu");
              

          }
    }

  const showMenu = (toggleId, navId) => {
    console.log("aaaaaaaa");
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
          console.log(nav.classList)
        if( nav.classList.contains("show-menu"))
            nav.classList.remove("show-menu");
        else
            nav.classList.add("show-menu");
        
      });
    }
  };
  const removeMenu = () => {
    const links = document.querySelectorAll(".nav__link");
    const nav = document.getElementById("nav-menu");
    links.forEach((element) => {
      element.addEventListener("click", () => {
        nav.classList.remove("show-menu");
      });
    });
  };

  const scrollHeader = () => {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
      console.log("adding scroll header");
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  };

  const scrollToTop = () => {
    const button = document.getElementById("scrollTopButton");
    button.addEventListener("click", () => {
      window.scrollTo("0", "0");
    });
  };

  const changeSelectedLink = () => {
    const about = document.getElementById("about");
    about.addEventListener("pageShow", () => {
      console.log("it is visiable now");
    });
  };

  const a = () => {
    console.log("happend");
  };

  useEffect(() => {
   // showMenu("nav-toggle", "nav-menu");
   // removeMenu();
    window.addEventListener("scroll", scrollHeader);
    scrollToTop();

    changeSelectedLink();
  }, []);

  return (
    <div>
      <div className="scoll-top rounded-3" id="scrollTopButton">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 64 64"
          aria-hidden="true"
          role="img"
          class="iconify iconify--emojione"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <circle cx="32" cy="32" r="30" fill="#069c54" />

            <path
              fill="#ffffff"
              d="M48 30.3L32 15L16 30.3h10.6V49h10.3V30.3z"
            />
          </g>
        </svg>
      </div>
      <header className="l-header" id="header">
        <nav className="nav bd-container">
          <a href="#" className="nav__logo">
            Tasty
          </a>
          <div></div>
          <div></div>
          <div className="nav__menu" id="nav-menu" ref={menuRef} >
            <ul className="nav-list">
              <li className="nav__item">
                <a href="#" className="nav__link active-link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#menu" className="nav__link">
                  Menu
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__toggle" onClick={()=>{toglleMenu()}} id="nav-toggle">
            <div> Menu </div>
          </div>
        </nav>
      </header>

      <main className="l-main">
        <section className="home" id="home">
          <div className="container">
            <div class="hero-container">
              <div class="col col">
                <div className="home-titles">
                  <h1 className="home-title">Tasty food</h1>
                  <h2 className="home__subtitle">
                    Try the best food of
                    <br />
                    the week
                  </h2>
                  <a href="#" className="button">
                    View menu
                  </a>
                </div>
              </div>

              <div class="col col-12 col-sm-12 col-lg-9">
                <div className="img-holder">
                  <img src={food1} className="home__img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about section bd-container" on={a} id="about">
          <div className="about__container bd-grid">
            <div className="about__data">
              <span className="section-subtitle">About us</span>
              <h2 className="section-title">
                We cook the best
                <br />
                tasty food
              </h2>
              <p className="about__descrption">
                We cook the best food in the entire city , with excellent
                customer service , the best meals and at the best price , visit
                ut
              </p>
              <a href="#" className="button" style={{ margin: "auto" }}>
                Explore History
              </a>
            </div>

            <img src={aboutImage} alt="" className="about__img" />
          </div>
        </section>

        <section className="menu section bd-container" id="menu">
          <span className="section-subtitle">Menu</span>
          <h2 className="section-title">Menu of the Week</h2>

          <div className="cards row">
            <div class=" card menu-card  shadow ">
              <img src={food2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="button">
                  Go somewhere
                </a>
              </div>
            </div>

            <div class="card menu-card shadow">
              <img src={food3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="button">
                  Go somewhere
                </a>
              </div>
            </div>

            <div class="card menu-card shadow">
              <img src={food4} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="button">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact " id="contact">
          <span className="section-subtitle">Contact</span>
          <h2 className="section-title">Let's talk</h2>
          <p className="contact__description">
            if you want o reserve a table in our restaurant cantact us and we
            aill attend you quickly with our 24/7 chat service
          </p>
          <a href="#" className="contact-button button">
            Contact us
          </a>
        </section>

        <footer className="footer" id="footer">
          <div className="infos">
            <div className="info col col-12 col-md-4">
              <div className="info-title"> Telephone </div>
              <li className="point">0991673458</li>
              <li className="point">0982495768</li>
              <li className="point">0123857489</li>
            </div>
            <div className="info col col-12 col-md-4">
              <div className="info-title"> Fax </div>
              <li className="point">4569-459-459</li>
              <li className="point">4569-459-458</li>
              <li className="point">4569-459-457</li>
            </div>

            <div className="info col col-12 col-md-4">
              <div className="info-title"> Email </div>
              <li className="point">webpage@gmail.com</li>
              <li className="point">designer@design.com</li>
              <li className="point">web@design.com</li>
            </div>
          </div>

          <div className="rights ">All Rights Served @Copyrights</div>
        </footer>
      </main>
    </div>
  );
};

export default Restaurant;
