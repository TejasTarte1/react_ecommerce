import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
        <div className="card-img-top-container overflow-hidden position-relative">
        <img src={props.data.product_img} className="card-img-top" alt="Wireless Headphones" />
        <div className="badge bg-success position-absolute top-0 end-0 m-2">New</div>
        </div>
        <div className="card-body pt-0">
          <h5 className="card-title text-center">{props.data.product_name}</h5>
          <div className="d-flex justify-content-between align-item-center">
          <h6 className="text-primary mb-0">&#8377;{props.data.price}</h6>
          <Link to={"/product_det/"+props.data.product_tbl_id}>
            <button className="btn btn-outline-primary btn-sm rounded-pill px-3">Add To Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
