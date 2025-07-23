import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    {
      id: 1,
      name: "WOMEN'S BOOTS SHOES",
      image: "images/image3.jpg",
      price:1500,
    },
    {
      id: 2,
      name: "WOMEN'S BOOTS SHOES",
      image: "images/image1.jpg",
      price:1500,
    },
    {
      id: 3,
      name: "Chairs",
      image: "images/image6.jfif",
      price:2000,
    },
    {
      id: 4,
      name: "Tables",
      image: "images/image4.jpg",
      price:3500,
    },
    {
      id: 5,
      name: "Wardrobes",
      image: "images/image5.jfif",
      price:2100,
    },
    {
      id: 6,
      name: "TV Units",
      image: "images/image6.jfif"
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center mb-4">Shop by Category</h2>
        <div className="row">
          {categories.map((cat) => (
            <div className="col-md-4 mb-4" key={cat.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={cat.image}
                  className="card-img-top"
                  alt={cat.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{cat.name}</h5>
                  <h6 className="card-title">&#8377;{cat.price}</h6>
                  <Link to="/products" className="btn btn-outline-primary btn-sm">
                    Buy Products
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/products">
        <button className="btn btn-primary btn-xl text-center">View More...</button>
        </Link>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default Categories;
