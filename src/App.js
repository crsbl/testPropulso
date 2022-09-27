import "./styles/constants.css";
import "./styles/style.css";
import "./styles/styleResponsive.css";
import React, { useState } from "react";
import logo from "./images/logo.png";
import slider from "./images/slider.png";
import especialistas1 from "./images/especialistas-1.png";
import especialistas2 from "./images/especialistas-2.png";
import especialistas3 from "./images/especialistas-3.png";
import especialistas4 from "./images/especialistas-4.png";
import producto from "./images/producto.png";
import svg from "./images/svg.js";

function App() {
  const Header = () => {
    return (
      <header>
        <div class="container flexColumn">
          <nav className="flexRow">
            
            <ul className="flexRow">
              <li>
                <a href="#">Nosotros</a>
              </li>
              <li>
                <a href="#">Galeria</a>
              </li>
              <li>
                <a href="#">Servicios</a>
              </li>
              <li>
                <a href="#">Productos</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
              <li>
                <a href="#">{svg.lupa}</a>
              </li>
              <li>
                <a href="#">{svg.agregar}</a>
              </li>
              <li>
                <a href="#">{svg.options}</a>
              </li>
            </ul>
          </nav>

          <div>
            <a href="#">
              <img className="imgSlider" src={slider} alt="slider" />
            </a>
          </div>
        </div>
      </header>
    );
  };

  const SectionProduct = () => {
    const [product, setProduct] = useState([
      {
        name: "Nombre de producto ejemplo largo",
        priceBefore: 19.99,
        price: 9.99,
        img: producto,
        discount: 10,
      },
      {
        name: "Nombre de producto ejemplo largo",
        priceBefore: 19.99,
        price: 9.99,
        img: producto,
        discount: 20,
      },
      {
        name: "Nombre de producto ejemplo largo",
        priceBefore: 19.99,
        price: 9.99,
        img: producto,
        discount: 30,
      },
      {
        name: "Nombre de producto ejemplo largo",
        priceBefore: 19.99,
        price: 9.99,
        img: producto,
        discount: 20,
      },
    ]);

    return (
      <section className="sectionContainerProduct flexRow">
        {product.map((product) => (
          <div class="divContainerProduct">
            <div className="flexClumn">
              <div className="divContainerIllustrationProduct">
                <span>
                  <h4>new</h4>
                  <h4>{product.discount}%</h4>
                </span>
                <img src={product.img} alt="producto" />
              </div>
              <div className="divContainerInfoProduct flexColumn">
                <p>{product.name}</p>
                <p className="flexRow">
                  <span>${product.priceBefore}</span>
                  <span>${product.price}</span>
                </p>
                <a href="#">{svg.carrito} Comprar</a>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  };

  const SectionProfessional = () => {
    return (
      <section>
        <div className="divcontainerProfessional flexColumn">
          <h2>Profesionales </h2>
          <h2> Especialistas</h2>
          <div className="divContainerGalleryProfessional">
            <img id="imgGallery00" src={especialistas1} alt="" />
            <img id="imgGallery01" src={especialistas2} alt="" />

            <img id="imgGallery02" src={especialistas3} alt="" />
            <img id="imgGallery03" src={especialistas4} alt="" />
          </div>
        </div>
      </section>
    );
  };

  const Subscription = () => (
    <section>
      <div class="container">
        <div className="divContainerSubscription00 flexRow">
          <div className="divContainerSubscription01 flexColumn">
            <h3>Subscribe to Newsletters</h3>
            <p>
              Be aware of upcoming sales and events. Receive gifts and special
              offers!
            </p>
          </div>

          <div className="divContainerSubscription02 flexRow">
            <input type="text" placeholder="Ingresa tu Correo" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
  return (
    <React.Fragment>
      <div className="divContainerMsj">Mensaje Informativo - Comercial</div>
      <Header />

      <SectionProduct />

      <SectionProfessional />

      <Subscription />
    </React.Fragment>
  );
}

export default App;
