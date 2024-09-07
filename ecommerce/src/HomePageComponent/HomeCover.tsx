import React from 'react'
import logo from './img/supercart-removebg-preview.png'
// import './Home.css'

const HomeCover = () => {
    return (
        <section style={coverImageStyle}>
          <div className="container">
            <div className="row">
              <div className="col">
                <img
                  src={logo}
                  alt="Logo"
                  className="img-fluid"
                  style={logoStyle}
                />
                <p style={sloganStyle}>Make people fall in love with your clothes.</p>
              </div>
            </div>
          </div>
        </section>
      );
}
// CSS-in-JSX
const coverImageStyle: React.CSSProperties = {
    width: '100%',
    
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '4rem',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage:'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgb(0 0 0 / 81%)),url(https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
    color: 'white',
    textAlign: 'center',
  };
  
  const logoStyle: React.CSSProperties = {
    maxWidth: '200px',
    backgroundColor: 'Maroon',
    marginBottom: '20px',
  };
  
  const sloganStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px maroon',
  };

export default HomeCover