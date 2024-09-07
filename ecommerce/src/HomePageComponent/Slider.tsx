import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
// import './Home.css'

const Slider = () => {
    return (
        <>
          <h3 style={{ textAlign: 'center' }}>Featured Products</h3>
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* 1st Carousel Item */}
        <div className="carousel-item active" data-bs-interval="2000">
          <div className="row">
            {/* 1.1 card */}
            <div className="col-lg-3 col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src="https://m.media-amazon.com/images/I/71Jwe2kb5pL._SX569_.jpg"
                  className="card-img-top"
                  alt="Symbol Premium Mens Wrinkle-Resistant Regular Fit Cotton Formal Shirt"
                />
                <div className="card-body d-flex mt-auto flex-column justify-content-around">
                  <h5 className="card-title">Formal Shirt</h5>
                  <p className="card-text">
                    Symbol Premium Mens Wrinkle-Resistant Regular Fit Cotton Formal Shirt.
                  </p>
                  <p className="card-text">Price: ₹1,499</p>
                  <a href="#xcx" className="btn btn-primary">
                    <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
                  </a>
                </div>
              </div>
            </div>
            {/* 1.2 card */}
            <div className="col-lg-3 col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src="https://m.media-amazon.com/images/I/51O5R2DCZ5L._SY741_.jpg"
                  className="card-img-top"
                  alt="Rajubhai Hargovindas Men Maroon Ethnic Motifs Chikankari Embroidered Kurta"
                />
                <div className="card-body d-flex mt-auto flex-column justify-content-around">
                  <h5 className="card-title">Men's Kurta</h5>
                  <p className="card-text">
                    Rajubhai Hargovindas Men Maroon Ethnic Motifs Chikankari Embroidered Kurta
                  </p>
                  <p className="card-text">Price: ₹2,870</p>
                  <a href="#cx" className="btn btn-primary">
                    <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
                  </a>
                </div>
              </div>
            </div>
            {/* 1.3 card */}
            <div className="col-lg-3 col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src="https://m.media-amazon.com/images/I/61rcvH+GltL._SY550_.jpg"
                  className="card-img-top"
                  alt="VASTRAMAY VM Mens Silk Blend Dhoti"
                />
                <div className="card-body d-flex mt-auto flex-column justify-content-around">
                  <h5 className="card-title">Men's Dhoti</h5>
                  <p className="card-text">
                    VASTRAMAY VM Mens Silk Blend Dhoti - Comfort, Classic Design for Festivals
                  </p>
                  <p className="card-text">Price: ₹936</p>
                  <a href="#cxc" className="btn btn-primary">
                    <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
                  </a>
                </div>
              </div>
            </div>
            {/* 1.4 card */}
            <div className="col-lg-3 col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src="https://m.media-amazon.com/images/I/81au4FfzaFL._SY550_.jpg"
                  className="card-img-top"
                  alt="Amazon Brand - Symbol Men's Cotton Rich Stretch Jeans"
                />
                <div className="card-body d-flex mt-auto flex-column justify-content-around">
                  <h5 className="card-title">Men's Jeans</h5>
                  <p className="card-text">
                    Amazon Brand - Symbol Men's Cotton Rich Stretch Jeans
                  </p>
                  <p className="card-text">Price: ₹1,499</p>
                  <a href="#cxc" className="btn btn-primary">
                    <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd Carousel Item */}
        <div className="carousel-item" data-bs-interval="2000">
          <div className="row">
            {/* 2.1 card */}
            <div className="col-lg-3 col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src="https://m.media-amazon.com/images/I/51B+5HGKCkL._SY500_.jpg"
                  className="card-img-top"
                  alt="Nishorama Cotton Printed Jaipuri Kurti for Women"
                />
                <div className="card-body d-flex mt-auto flex-column justify-content-around">
                  <h5 className="card-title">Woman's Kurti</h5>
                  <p className="card-text">Nishorama Cotton Printed Jaipuri Kurti for Women</p>
                  <p className="card-text">Price: ₹899</p>
                  <a href="#cxxc" className="btn btn-primary">
                    <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
                  </a>
                </div>
              </div>
            </div>
            {/* 2.2 card */}
            <div className="col-lg-3 col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src="https://m.media-amazon.com/images/I/81SYkmrIELL._SY550_.jpg"
                  className="card-img-top"
                  alt="DHRUVI TRENDZ Women's Art Silk Saree"
                />
                <div className="card-body d-flex mt-auto flex-column justify-content-around">
                  <h5 className="card-title">Woman's Saree</h5>
                  <p className="card-text">DHRUVI TRENDZ Women's Art Silk Saree</p>
                  <p className="card-text">Price: ₹199</p>
                  <a href="#xcxc" className="btn btn-primary">
                    <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
                  </a>
                </div>
              </div>
            </div>
            {/* 2.3 card */}
            <div className="col-lg-3 col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src="https://m.media-amazon.com/images/I/71Jwe2kb5pL._SX569_.jpg"
                  className="card-img-top"
                  alt="Women Floral Print Anarkali Kurta with Pant and Dupatta"
                />
                <div className="card-body d-flex mt-auto flex-column justify-content-around">
                  <h5 className="card-title">Woman's Dress</h5>
                  <p className="card-text">
                    Women Floral Print Anarkali Kurta with Pant and Dupatta
                  </p>
                  <p className="card-text">Price: ₹1,199</p>
                  <a href="#cxc" className="btn btn-primary">
                    <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
                  </a>
                </div>
              </div>
            </div>
            {/* 2.4 card */}
            <div className="col-lg-3 col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src="https://m.media-amazon.com/images/I/71ZV9vWwNVL._SX522_.jpg"
                  className="card-img-top"
                  alt="Azira Front Open Longline Printed Shrug Red"
                />
                <div className="card-body d-flex mt-auto flex-column justify-content-around">
                  <h5 className="card-title">Formal Shrug</h5>
                  <p className="card-text">Azira Front Open Longline Printed Shrug Red</p>
                  <p className="card-text">Price: ₹899</p>
                  <a href="#cxcx" className="btn btn-primary">
                    <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
          
        </>
      );
}
// // CSS-in-JSX
// const cardImgStyle: React.CSSProperties = {
//     width: '100%',
//     height: '250px',
//   };
  
//   const btnStyle: React.CSSProperties = {
//     width: '145px',
//     backgroundColor: '#e3d242',
//     color: 'black',
//   };
  
//   const carouselControlStyle: React.CSSProperties = {
//     backgroundColor: 'black',
//   };
  

export default Slider