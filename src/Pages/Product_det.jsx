import React, { useEffect, useState } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Product_det(){
  var { product_id }=useParams();
  const[product_info,setProductInfo]=useState({});
  useEffect(()=>{
    var obj={"product_id":product_id,"token":localStorage.getItem("user_token")};
    axios.post("https://a2zithub.org/dairy/abi/product_by_id",obj).then((res)=>{
    console.log(res.data);
    
    setProductInfo(res.data);
    })
  },[])

  function add_to_cart(){
    var obj={"product_id":product_id,"token":localStorage.getItem("user_token")};
    axios.post("https://a2zithub.org/dairy/abi/addtocart",obj).then((res)=>{
      console.log(res.data);
      window.location.reload();
    })
  }
  return(
    <>
    <Navbar/>
    <h1 className="text-center">Product Details {product_id}</h1>
    <div className="container">
      <div className="row">
        <div className="col-5">
          <img src={product_info.product_img} width="100%"/>
        </div>
        <div className="col-7 mt-5">
          <h3 className="text-primary">{product_info.product_name}</h3>
          <h4>&#8377;{product_info.price}</h4>
          <p>{product_info.product_details}</p>

          {product_info.cart=='No' ?<button className="btn btn-primary" onClick={add_to_cart}>Add to Cart</button>:''}

          {product_info.cart=='Yes' ?<Link to="/cart"><button className="btn btn-success btn-lg">Continue With Cart</button></Link>:''} 
           <Link to="/products">
          <button className="btn btn-primary btn-lg">Continue Shopping</button> 
           </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
export default Product_det;