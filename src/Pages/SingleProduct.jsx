import React, { useEffect, useState } from "react";
import axiosInstance from "../Api/axiosInstance";
import { single_product_end } from "../Api/end_point";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axiosInstance(single_product_end + id)
      .then((res) => {
        // console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {/* Product Images */}
          <div className="col-md-6 mb-4">
            <img
              src={data.image}
              alt="Product"
              className="img-fluid rounded mb-3 product-image"
              id="mainImage"
            />
          </div>
          {/* Product Details */}
          <div className="col-md-6">
            <h2 className="mb-3">{data.name}</h2>
            <p className="text-muted mb-4">Brand :- {data.brand}</p>
            <div className="mb-3">
              <span className="h4 me-2">₹{data.price}</span>
              <span className="text-muted">
                <s> ₹{data.price + 100}</s>
              </span>
            </div>

            <p className="mb-4">{data.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
