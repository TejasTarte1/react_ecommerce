import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Cart(){

  var [products,setProducts]=useState([]);
  
  function getProducts(){
     var obj={"token":localStorage.getItem("user_token")};
    axios.post("https://a2zithub.org/dairy/abi/cart_list",obj).then((res)=>{
      console.log(res.data);
      setProducts(res.data);
    })
  }
  useEffect(()=>{
   getProducts();
  },[]);

  function remove_cart_qty(product_econ_cart_id){
    console.log("product_econ_cart_id",product_econ_cart_id);
    console.log("token",localStorage.getItem("user_token"));
    var obj={"product_econ_cart_id":product_econ_cart_id, "token":localStorage.getItem("user_token")};
    axios.post("https://a2zithub.org/dairy/abi/remove_cart_qty",obj).then((res)=>{
      console.log("result",res);
      getProducts();
    })
  }

  function inc_qty(product_econ_cart_id)
  {
    var obj={"product_econ_cart_id":product_econ_cart_id,"token":localStorage.getItem("user_token")};
    axios.post("https://a2zithub.org/dairy/abi/inc_cart_qty",obj).then((res)=>{
      console.log("result",res);
      getProducts();
    })
  }

  function dec_qty(product_econ_cart_id)
  {
    var obj={"product_econ_cart_id":product_econ_cart_id,"token":localStorage.getItem("user_token")};
    axios.post("https://a2zithub.org/dairy/abi/dec_cart_qty",obj).then((res)=>{
      console.log("result",res);
      getProducts();
    })
  }


  return(
    <>
    <Navbar/>
    <br/><br/>
    <div className="container">
      <div className="row justify-content-center">
      <div className="col-md-10">
      <h1 className="text-center">My Cart</h1>
      <table className="table">
  <thead>
    <tr>
      <th>Product Image</th>
      <th>Product Name</th>
      <th>Product price</th>
      <th>Product Qty</th>
      <th>Product Total</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
    {products.map((val, index) => (
      <tr key={index}>
        <td><img src={val.product_img} width="100px"/></td>
        <td>{val.product_name}</td>
        <td>&#8377;{val.price}</td>
        <td><button className="btn btn-border-none btn-sm" onClick={()=>inc_qty(val.product_econ_cart_id)}>+</button>{val.qty}<button className="btn btn-border-none btn-sm" onClick={()=>dec_qty(val.product_econ_cart_id)}>-</button></td>
        <td>{val.qty * val.price}</td>
        <td>
          <button onClick={()=>remove_cart_qty(val.product_econ_cart_id)}>&#10005;</button>
        </td>
        <td></td>
      </tr>
    ))}
  </tbody>
</table>
<div className="text-center">
  <Link to="/checkout">
  <button className="btn btn-primary btn-lg">Procced to Buy</button>
  </Link>
  <Link to="/products">
  <button className="btn btn-dark btn-lg">Go to Shopping</button>
  </Link>
</div>
</div>
</div>
</div>
<Footer/>
    </>
  )
}
export default Cart;


// &#10003;