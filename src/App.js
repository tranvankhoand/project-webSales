import React from 'react';
import './App.css';
import Index from './Components/index';
import {Routes,Route} from 'react-router-dom'
import Login from './Components/login';
import Cart from './Components/cart';
import Contact from './Components/contact';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>  
      
    </div>
  );
}

export default App;
