import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

function CategoryProducts() {
  const { id } = useParams(); 
  const [products, setProducts] = useState([]);

  const allProducts = [
    { id: 101, category_id: 1, name: "WOMEN'S BOOTS SHOES", price: "1500", image: "images/image3.jpg" },
    { id: 102, category_id: 2, name: "Stylish Heels", price: "1800", image: "images/image1.jpg" },
    { id: 103, category_id: 3, name: "Wooden Chair", price: "2200", image: "images/image6.jfif" },
    { id: 104, category_id: 4, name: "Dining Table", price: "5000", image: "images/image4.jpg" },
    { id: 105, category_id: 5, name: "Sliding Wardrobe", price: "7500", image: "images/image5.jfif" },
    { id: 106, category_id: 6, name: "LED TV Unit", price: "3200", image: "images/image6.jfif" },
  ];

  useEffect(() => {
    
    const filtered = allProducts.filter(p => p.category_id === parseInt(id));
    setProducts(filtered);
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center mb-4">Products in Category</h2>
        <div className="row">
          {products.length > 0 ? (
            products.map((prod) => (
              <div className="col-md-4 mb-4" key={prod.id}>
                <div className="card h-100">
                  <img src={prod.image} className="card-img-top" alt={prod.name} style={{ height: "200px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">{prod.name}</h5>
                    <p className="card-text">₹{prod.price}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No products found in this category.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CategoryProducts;
