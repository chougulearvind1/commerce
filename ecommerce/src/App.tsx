import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

// import './App.css';
import Home from './Home';
import Header from './HomePageComponent/Header';
import Footer from './HomePageComponent/Footer';
import Cart from './Cart';
import AllComponent from './AllComponent';



function App() {
  return (
    <div className="App">
      
      <Router>
      <Header></Header>
      <Routes>
          <Route path='*'Component={Home}></Route>
          <Route path='/cart' Component={Cart}></Route>
          <Route path='/allProduct' Component={AllComponent}></Route>

        </Routes>
        <Footer></Footer>
      </Router>
      
      
      
    </div>
  );
}

export default App;
