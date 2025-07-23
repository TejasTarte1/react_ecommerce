import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create_account(){
  const[user_name,setUserName]=useState("");
  const[user_mobile,setUserMobile]=useState("");
  const[user_email,setUserEmail]=useState("");
  const[user_password,setUserPassword]=useState("");
  
  const navigate=useNavigate();


  function submitForm(event)
  {
    event.preventDefault();

    var obj={"user_name":user_name,"user_mobile":user_mobile,"user_email":user_email,"user_password":user_password}
    axios.post("https://a2zithub.org/dairy/abi/user_register",obj).then((res)=>{
      console.log(res.data);
      navigate("/login");
    })

  }
  return(
    <>
    <Navbar/>
    <br/><br/>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5 border p-3">
          <h1>Create Account</h1>
          <form action="" method="" onSubmit={submitForm}>
            <label>Enter Name</label>
            <input type="text" className="form-control" onChange={(e)=>{setUserName(e.target.value)}}/>
             <label>Enter Mobile</label>
            <input type="number" className="form-control" onChange={(e)=>{setUserMobile(e.target.value)}}/>
             <label>Enter Email</label>
            <input type="email" className="form-control" onChange={(e)=>{setUserEmail(e.target.value)}}/>
             <label>Enter Password</label>
            <input type="password" className="form-control" onChange={(e)=>setUserPassword(e.target.value)}/>
            <div className="col-12 text-center mt-3">
              <button className="btn btn-dark btn-sm">Create Account</button>
            </div>
          </form>
        </div>

      </div>
    </div>
    <br/>
    <br/>
    <Footer/>
    </>
  )
}
export default Create_account;