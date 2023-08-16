import React from 'react';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './Pages/Home/Home';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Shop from './components/Cart/Shop';
import Categoria from './Pages/Categorias/Categoria';
import Futbol from './Pages/Futbol/Futbol';


function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="SportClans/" element={<Home />} />
              <Route path={'SportClans/cart'} element={<Cart/>}/>
              <Route path={'SportClans/shop'} element={<Shop/>}/>
              <Route path="SportClans/product/:categoria/:id" element={<Categoria />} />
              <Route path="SportClans/product/:categoria" element={<Categoria />} />
            </Routes>
          </div>
        </div>
      </Router> 
    </CartProvider>   
  );
}

export default App;
