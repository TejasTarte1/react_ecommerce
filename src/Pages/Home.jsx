import React, { useEffect, useState } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import ProductCard from "./common/ProductCard";
import axios from "axios";
import './style.css';
import { Link } from "react-router-dom";

function Home() {
  const[sliders,setSliders]=useState([]);

  useEffect(()=>{
  axios.get("https://a2zithub.org/dairy/abi/slider_det").then((res)=>{
    console.log("Server response",res.data);

    setSliders(res.data);
  })
  },[])
  return (
    <>
      <Navbar />
      <div id="carouselBanner" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          {sliders.map((val,index)=>(

         
          <div className={index==0 ? "carousel-item active":"carousel-item"} key={index}>
            <img src={val.slider_img} className="d-block w-100" alt="Banner 1" />
          </div>
           ))}
          {/* <div className="carousel-item">
            <img src="https://a2zithub.org/dairy/uploads/171354358665083344.webp" className="d-block w-100" alt="Banner 2" />
          </div>
          <div className="carousel-item">
            <img src="https://a2zithub.org/dairy/uploads/171601382516103680.jpg" className="d-block w-100" alt="Banner 3" />
          </div> */}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselBanner" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselBanner" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

<div className="container my-5">
  <h2 className="text-center mb-4">Shop by Categories</h2>
  <div className="row text-center">

    <div className="col-md-4 mb-4">
      <div className="card border-0 shadow">
        <img src="/images/image1.jpg" className="card-img-top" alt="Milk" />
        <div className="card-body">
          <h5 className="card-title">WOMEN'S BOOTS SHOES MACA</h5>
          <Link to="/products" className="btn btn-primary">Shop Now</Link>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="card border-0 shadow">
        <img src="/images/image2.jpg" className="card-img-top" alt="Curd" />
        <div className="card-body">
          <h5 className="card-title">WOMEN'S MINAM MEAGHAN</h5>
          <Link to="/products" className="btn btn-primary">Shop Now</Link>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="card border-0 shadow">
        <img src="/images/image3.jpg" className="card-img-top" alt="Butter" />
        <div className="card-body">
          <h5 className="card-title">WOMEN'S BOOTS SHOES</h5>
          <Link to="/products" className="btn btn-primary">Shop Now</Link>
        </div>
      </div>
    </div>

  </div>
</div>



<div className="bg-light py-5">
  <div className="container">
    <h2 className="text-center mb-5 fw-bold">🌟 Why Choose Us?</h2>
    <div className="row g-4">
      
      <div className="col-md-3">
        <div className="card h-100 text-center border-0 shadow-sm hover-shadow">
          <div className="card-body">
            <i className="bi bi-truck fs-1 text-primary mb-3"></i>
            <h5 className="card-title fw-semibold">Fast Delivery</h5>
            <p className="card-text text-muted small">We ensure your order reaches your doorstep quickly and safely.</p>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card h-100 text-center border-0 shadow-sm hover-shadow">
          <div className="card-body">
            <i className="bi bi-shield-check fs-1 text-success mb-3"></i>
            <h5 className="card-title fw-semibold">100% Quality</h5>
            <p className="card-text text-muted small">Our products go through strict quality checks to maintain excellence.</p>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card h-100 text-center border-0 shadow-sm hover-shadow">
          <div className="card-body">
            <i className="bi bi-clock-history fs-1 text-warning mb-3"></i>
            <h5 className="card-title fw-semibold">On-Time Service</h5>
            <p className="card-text text-muted small">Punctuality is our promise — count on us every day.</p>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card h-100 text-center border-0 shadow-sm hover-shadow">
          <div className="card-body">
            <i className="bi bi-telephone fs-1 text-danger mb-3"></i>
            <h5 className="card-title fw-semibold">24x7 Support</h5>
            <p className="card-text text-muted small">Need help? We're here for you any time, any day.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>


<div class="container my-5">
    <h2 class="text-center mb-4">Customer Reviews</h2>
    <div class="row">
        <div class="col-md-4">
            <div class="card testimonial-card">
                <div class="text-center">
                    <img src="images/customer2.webp" alt="Jane Doe" class="rounded-circle" width="100" height="100"/>
                </div>
                <div class="card-body">
                    <p class="card-text">"These product are amazing!  Highly recommend!"</p>
                    <h5 class="card-title">Alexa Johnson</h5>
                    <p class="card-subtitle">Branded Products</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card testimonial-card">
                <div class="text-center">
                    <img src="images/customer.webp" alt="John Smith" class="rounded-circle" width="100" height="100"/>
                </div>
                <div class="card-body">
                    <p class="card-text">"Fantastic service and high-quality products. I will definitely shop here again!"</p>
                    <h5 class="card-title">John Smith</h5>
                    <p class="card-subtitle">Loyal Service</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card testimonial-card">
                <div class="text-center">
                    <img src="images/customer1.webp" alt="Emily Johnson" class="rounded-circle" width="100" height="100"/>
                </div>
                <div class="card-body">
                    <p class="card-text">"I was skeptical at first, but this exceeded all my expectations. Five stars!"</p>
                    <h5 class="card-title">Emily Johnson</h5>
                    <p class="card-subtitle">Happy Customer</p>
                </div>
            </div>
        </div>
    </div>
</div>
      <Footer />
    </>
  );
}

export default Home;



