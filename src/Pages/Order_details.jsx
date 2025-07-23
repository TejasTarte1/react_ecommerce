import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

function Order_details() {
  const { product_order_id } = useParams();
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const obj = {
      token: localStorage.getItem("user_token"),
      product_order_id: product_order_id
    };

    axios.post("https://a2zithub.org/dairy/abi/order_det", obj)
      .then((res) => {
        console.log("Order Details Response:", res.data);
        if (res.data && res.data.product_order_id) {
          setOrderItems(res.data.product_order_id);
        }
      })
      .catch((err) => {
        console.error("Error fetching order details", err);
      });
  }, [product_order_id]);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>Order Details for Order ID: {product_order_id}</h2>
        <table className="table table-bordered table-sm">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orderItems.length > 0 ? (
              orderItems.map((val, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{val.product_name}</td>
                  <td>{val.qty}</td>
                  <td>{val.price}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">No items found for this order.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default Order_details;
