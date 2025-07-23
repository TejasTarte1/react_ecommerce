
function Footer() {

  return (
    <>
      <footer className="bg-dark text-dark pt-5 pb-3 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-3 mb-4 text-center text-md-left">
              <h5 className="text-uppercase fw-bolder mb-4">Shopify</h5>
            </div>

            <div className="col-md-3 mb-4 text-center text-md-left">
              <h5 className="text-uppercase mb-3">About Us</h5>
              <p>
                We offer the best products at the most affordable prices. Trusted by thousands of customers across the globe.
              </p>
            </div>

            <div className="col-md-3 mb-4 text-center text-md-left">
              <h5 className="text-uppercase mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-dark text-decoration-none">Home</a></li>
                <li><a href="#" className="text-dark text-decoration-none">Products</a></li>
                <li><a href="#" className="text-dark text-decoration-none">Cart</a></li>
                <li><a href="#" className="text-dark text-decoration-none">Profile</a></li>
                <li><a href="#" className="text-dark text-decoration-none">Contact Us</a></li>
                <li><a href="#" className="text-dark text-decoration-none">About Us</a></li>
              </ul>
            </div>

            <div className="col-md-3 mb-4 text-center text-md-left">
              <h5 className="text-uppercase mb-3">Contact</h5>
              <p><strong>Email:</strong> <a href="mailto:support@example.com" className="text-dark text-decoration-none">support@example.com</a></p>
              <p><strong>Phone:</strong> +91-9876543210</p>
              <p><strong>Address:</strong> Pune, Maharashtra, India</p>
            </div>
          </div>

          <hr className="border-light" />
          <div className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Shopify. All rights reserved.</p>
          </div>
        </div>
      </footer>

      
    </>
  );
}

export default Footer;
