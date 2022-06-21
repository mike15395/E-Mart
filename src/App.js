
import './App.css';
import Home from './components/Home';

import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/products/:id' element={<Product />} />
      </Routes>

    </div>
  );
}

export default App;
