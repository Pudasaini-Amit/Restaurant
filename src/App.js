import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
//import BmiCalculator from './components/BmiCalculator';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import Cart from './components/cart/Cart';



function App() {
  return (
    <div className="App">

        <BrowserRouter>
          <Navbar/>

          <Routes>
            
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            
          </Routes>
        
        </BrowserRouter>

      
      
      
    
    </div>
  );
}

export default App;
