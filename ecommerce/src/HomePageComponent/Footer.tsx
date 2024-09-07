import React from 'react'
// import './Footer.css'
const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'black', color: 'white' }}>
          <div className="container py-4">
            <div className="row">
              <div className="col-md-3 footer-column" style={{ marginBottom: '20px' }}>
                <h5>Women</h5>
                <ul className="list-unstyled">
                  <li><a href="/woman/Dress.html" style={{ color: 'white' }}>Dresses</a></li>
                  <li><a href="/woman/Pant.html" style={{ color: 'white' }}>Pants</a></li>
                  <li><a href="/woman/Skirts.html" style={{ color: 'white' }}>Skirts</a></li>
                </ul>
              </div>
              <div className="col-md-3 footer-column" style={{ marginBottom: '20px' }}>
                <h5>Men</h5>
                <ul className="list-unstyled">
                  <li><a href="/men/shirts.html" style={{ color: 'white' }}>Shirts</a></li>
                  <li><a href="/men/Pants.html" style={{ color: 'white' }}>Pants</a></li>
                  <li><a href="/men/Hoodies.html" style={{ color: 'white' }}>Hoodies</a></li>
                </ul>
              </div>
              <div className="col-md-3 footer-column" style={{ marginBottom: '20px' }}>
                <h5>Kids</h5>
              </div>
              <div className="col-md-3 footer-column" style={{ marginBottom: '20px' }}>
                <h5>Links</h5>
                <ul className="list-unstyled">
                  <li><a href="/Homepage.html" style={{ color: 'white' }}>Home</a></li>
                  <li><a href="/Login.html" style={{ color: 'white' }}>Login</a></li>
                  <li><a href="/contact.html" style={{ color: 'white' }}>Contact</a></li>
                </ul>
              </div>
            </div>
            
            <hr className="my-4 border-light" style={{ borderColor: 'lightgrey' }} />
            <p className="text-center mb-0">&copy; 2024 Your Website. All rights reserved.</p>
          </div>
        </footer>
      );
}

export default Footer