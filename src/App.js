import './App.css';
import Navbar from './Navbar';
import { Home } from './Home';
import {Routes,Route} from 'react-router-dom';
import Products from './Products';
import Product from './Product';
import Cart from './Cart';

const App =()=> {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home />}/>
    <Route exact path='/products' element={<Products />}/>
    <Route exact path='/products/:id' element={<Product />}/>
    <Route exact path='/cart' element={<Cart />}/>
    </Routes>
    </>
  );
}

export default App;
