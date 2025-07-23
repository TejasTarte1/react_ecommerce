import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import './style.css';
function ContactUs() {
  return (
    <>
      <Navbar />

      <div className="contact-page">
        <div className="container">
          <h2>Contact Us</h2>
          <p className="subtitle">Have a question or need help? Reach out to us!</p>

          <div className="contact-grid">
            <div className="contact-form">
              <form>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <input type="text" name="subject" placeholder="Subject" required />
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
            <div className="contact-info">
              <h4>Our Address</h4>
              <p>123 Market Street, Pune, Maharashtra 411001</p>
              <p>Email: support@ecomstore.com</p>
              <p>Phone: +91 98765 43210</p>

              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4466334728034!2d73.87823737520386!3d18.50736068258015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14f03b49d7f%3A0x112c6f6bcad70d21!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1688894567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs;
