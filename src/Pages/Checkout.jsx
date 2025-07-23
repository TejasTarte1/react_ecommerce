import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Checkout(){

  const navigate=useNavigate();
  const[area,setArea]=useState("");
  const[city,setCity]=useState("");
  const[district,setDistrict]=useState("");
  const[state,setState]=useState("");
  const[country,setCountry]=useState("");
  const[pincode,setPincode]=useState("");
  const[payment_type,setPaymentType]=useState("");

  function place_order(event){


    
    event.preventDefault();
    

    var obj={area,city,district,state,country,pincode,payment_type,"token":localStorage.getItem('user_token')};

    axios.post("https://a2zithub.org/dairy/abi/place_order",obj).then((res)=>{
      // console.log("Order Placed",res);
      navigate("/order_list");
    },[]);
  }
  return(    
  <>
  <section className="container my-5">
  <h2 className="text-center mb-4">Checkout Process</h2>
  <div className="card shadow p-4">
  <form onSubmit={place_order}>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Area</label>
          <input type="text" className="form-control" id="area" placeholder="Enter Area" required onChange={(e)=>setArea(e.target.value)}/>
        </div>
        <div className="col-md-6">
          <label className="form-label">City</label>
          <input type="text" className="form-control" id="city" placeholder="Enter City" required onChange={(e)=>setCity(e.target.value)}/>
        </div>
        <div className="col-md-6">
          <label className="form-label">District</label>
          <input type="text" className="form-control" id="district" placeholder="Enter District" required onChange={(e)=>setDistrict(e.target.value)}/>
        </div>

        <div className="col-md-6">
          <label className="form-label">State</label>
          <input type="text" className="form-control" id="state" placeholder="Enter State" required onChange={(e)=>setState(e.target.value)}/>
        </div>

        <div className="col-md-6">
          <label className="form-label">Country</label>
          <input type="text" className="form-control" id="country" placeholder="Enter Country" required onChange={(e)=>setCountry(e.target.value)}/>
        </div>

        <div className="col-md-6">
          <label className="form-label">Pincode</label>
          <input type="text" className="form-control" id="pincode" placeholder="Enter Pincode" required onChange={(e)=>setPincode(e.target.value)}/>
        </div>

        <div className="col-md-6">
          <label className="form-label">Payment Type</label>
          <select className="form-select" id="payment_type" required onChange={(e)=>setPaymentType(e.target.value)}>
            <option value="">Select Payment Method</option>
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
            <option value="netbanking">Net Banking</option>
          </select>
        </div>
      </div>
      <center>
      <div className="text-center mt-4">
        <button type="submit" className="btn btn-primary px-5">Place Order</button>
      </div>
      </center>
    </form>
  </div>
</section>
    </>
  )
}
export default Checkout;