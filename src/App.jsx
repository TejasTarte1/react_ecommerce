import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Pages/common/Navbar';
import Footer from './Pages/common/Footer';
import Products from './Pages/Products';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product_det from './Pages/Product_det';
import Create_account from './Pages/Create_account';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Order_list from './Pages/Order_list';
import Order_details from './Pages/Order_details';
import Profile from './Pages/Profile';
import Categories from './Pages/Categories';
import CategoryProducts from './Pages/CategoryProducts';
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}/>
      <Route path='/product_det/:product_id' element={<Product_det/>}></Route>
      <Route path='/create_account' element={<Create_account/>}/>
      <Route path='/login' element={<Login></Login>}/>
      <Route path='/cart' element={<Cart></Cart>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/order_list' element={<Order_list/>}/>
      <Route path='/order_details/:product_order_id' element={<Order_details></Order_details>}/>
      <Route path='/profile' element={<Profile></Profile>}/>
      <Route path='/categories' element={<Categories/>}/>
      <Route path="/category/:id" element={<CategoryProducts />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact></Contact>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}
export default App;
