import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login(){

const[user_mobile,setUserMobile]=useState("");
const[user_password,setUserPassword]=useState("");

const navigate=useNavigate();

function loginProcess(event){
  event.preventDefault();
  console.log(user_mobile);
  console.log(user_password);

  var obj={"user_mobile":user_mobile,"user_password":user_password};

  axios.post("https://a2zithub.org/dairy/abi/user_login",obj).then((res)=>{
  if(res.data.status == 'success'){
    // alert("Login Successfull");
    console.log(res.data);
    localStorage.setItem("user_token",res.data.token);
    navigate("/products");
    
  }
  else{
    alert("Login Failed");
  }
  })
}
  return(
    <>
    <Navbar/>

     <br/><br/>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5 border p-3">
          <h1 className="text-center">Login Now</h1>
          <form action="" method="" onSubmit={loginProcess}>
           
             <label>Enter Mobile</label>
            <input type="number" className="form-control" onChange={(e)=>{setUserMobile(e.target.value)}}/>
             <label>Enter Password</label>
            <input type="password" className="form-control" onChange={(e)=>setUserPassword(e.target.value)}/>
            <div className="col-12 text-center mt-3">
              <button className="btn btn-dark btn-sm">Login Now</button>
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
export default Login;