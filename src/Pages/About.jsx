import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center mb-4">About Us</h2>

        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src="images/aboutimg.jpg"
              alt="About us"
              className="img-fluid rounded shadow w-100"
            />
          </div>
          <div className="col-md-6">
            <h4>Welcome to Our Store</h4>
            <p className="text-xl text-secondary">
              We are a passionate team dedicated to delivering high-quality products at affordable prices. 
              Our mission is to make online shopping smooth, secure, and satisfying. Whether it’s furniture, fashion, or electronics — we provide products that match your style and budget.
            </p>
            <p className="text-xl text-secondary">
              We believe in trust, transparency, and top-notch service. That’s why thousands of happy customers keep coming back!
            </p>
          </div>
        </div>

        <div className="row text-center mb-5">
          <div className="col-md-4">
            <i className="bi bi-award-fill fs-1 text-primary"></i>
            <h5 className="mt-2">Premium Quality</h5>
            <p>We ensure quality checks at every stage of product delivery.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-truck fs-1 text-success"></i>
            <h5 className="mt-2">Fast Delivery</h5>
            <p>Get your orders delivered quickly and safely.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-headset fs-1 text-warning"></i>
            <h5 className="mt-2">24x7 Support</h5>
            <p>Have questions? Our team is here to help anytime!</p>
          </div>
        </div>

        <div className="text-center">
          <h5>Want to know more?</h5>
          <p>
            Contact our support team or visit our page.
            <h4>Contact No: +91-9876543210</h4>
            <h5>Email: support@example.com</h5>
            <p>Address:  Pune, Maharashtra, India</p>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
