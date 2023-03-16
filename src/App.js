import './App.css';
import React from 'react';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { NavBar } from './Components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer.jsx';
import { CartContainer } from './Components/cart/CartContainer';
import { CartProvider } from "./Components/cart/CartContex.js";


function App() {
  return (
    
    <CartProvider>
      <BrowserRouter>
      
          <div className="App">
            <div>
              <NavBar/>
              <Routes>
                
                      <Route path='/' element={<ItemListContainer />}/>
                      <Route path="/productos/:tipoProducto" element={<ItemListContainer/>}/>
                      <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
                      <Route path="/cart" element={<CartContainer/>}/>
                
              </Routes>
            </div>

          </div>
          
      </BrowserRouter>

    </CartProvider> 
    
  );
}

export default App;
