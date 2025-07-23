import React, { useEffect, useState } from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import ProductCard from './common/ProductCard';
import axios from 'axios';

function Products(){
  const[products,setProducts]=useState([]);

  useEffect(()=>{
    axios.get("https://a2zithub.org/dairy/abi/product_det").then((res)=>{
    setProducts(res.data);

    });
  })
  return(
    <>
    <Navbar/>
    <br/><br/>
    <h1 className='text-center'>Products</h1><br/><br/>
    <div className='container'>
    <div className='row'>
      {products.map((val,index)=>(
      <ProductCard data={val}></ProductCard>
      ))}
    </div>
    </div>
    <Footer/>
    </>
  )
}
export default Products;