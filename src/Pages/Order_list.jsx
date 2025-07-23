import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Order_list(){
  
  const[orders,setOrders]=useState([]);
  useEffect(()=>{
    var obj={"token":localStorage.getItem("user_token")};
    axios.post("https://a2zithub.org/dairy/abi/order_list",obj).then((res)=>{
      console.log(res.data);
      setOrders(res.data.order_det);
    })
  },[])
  return(
    <>
    <Navbar/>
    <br></br>
    <h1>Order List Page</h1>
    <div className="container">
      <div className="row justify-content-center">
      <div className="col-md-8">
      <table className="table table-sm table-bordered table-hovered table-stripped">
      <tr>
      <th></th>
      <th width="100px">Order Id</th>
      <th width="150px">Date</th>
      <th>Address</th>
      <th>Amount</th>
      </tr> 
      {orders.map((val,index)=>(
        <tr>
          <td>
            {/* <Link to={'/order_details/'+val.product_order_id}>
            <button className="btn btn-primary btn-sm">Print</button>
            </Link> */}
          </td>
          <td>{val.product_order_id}</td>
          <td>{val.entry_date}</td>
          <td>{val.area+","+val.city+","+val.country+","+val.district}</td>
          <td>{val.ttl_amount}</td>
        </tr>
      ))} 
      </table> 
      </div>
      </div>
    </div>

    <Footer/>
    </>
  )
}
export default Order_list;