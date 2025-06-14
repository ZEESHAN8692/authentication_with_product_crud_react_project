import React, { useEffect, useState } from "react";
import axiosInstance from "../Api/axiosInstance";
import {
  create_product_end,
  delete_product_end,
  product_end,
} from "../Api/end_point";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [getData, setGetData] = useState([]);
  const [showCreateModel, setShowCraeteModel] = useState(false);
  const createhandleClose = () => setShowCraeteModel(false);
  const [refresh, setRefresh] = useState(false);
  const createhandleShow = () => setShowCraeteModel(true);
  const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  // -------Get All Product-------
  useEffect(() => {
    axiosInstance.get(product_end).then((res) => {
      console.log(res.data.data);
      setGetData(res.data.data);
    });
  }, [refresh]);

  // Create Product -----------
  function createDataSunmit(data) {
    console.log("Form Data ", data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("brand", data.brand);
    formData.append("image", data.image[0]);

    axiosInstance
      .post(create_product_end, formData)
      .then((res) => {
        console.log("api resposnce create product", res.data);
        alert("Product Create Success");
        setShowCraeteModel(false);
        setRefresh((prev) => !prev);
      })
      .catch((err) => console.log(err));
  }

  const handleDlete = (id) => {
    axiosInstance
      .delete(delete_product_end + id)
      .then((res) => {
        console.log(res.data);
        alert("product Delete Delete Succesfull");
        setRefresh((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  // Update Navigate ------
  const handleUpdate = (id) => {
    navigate(`/update_product/${id}`);
  };

  // Show Single Product
  const handleShowSingle = (id) => {
    navigate(`/single_product/${id}`);
  };

  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <Button
          variant="primary"
          size="lg m-2"
          active
          onClick={createhandleShow}
        >
          Create Product
        </Button>

        <div className="text-center container py-5">
          <h4 className="mt-4 mb-5">
            <strong>All Products</strong>
          </h4>

          <div className="row">
            {getData?.map((product) => {
              return (
                <div className="col-lg-4 col-md-6 mb-4" key={product._id}>
                  <div className="card">
                    <div
                      className="bg-image hover-zoom ripple"
                      data-mdb-ripple-color="light"
                    >
                      <img src={product.image} className="w-100" />

                      <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                          <h5>
                            <button
                              className="badge bg-success ms-2 outLine"
                              onClick={() => handleUpdate(product._id)}
                            >
                              Update
                            </button>
                            <button
                              className="badge bg-danger ms-2 outLine"
                              onClick={() => handleDlete(product._id)}
                            >
                              Delete
                            </button>
                            <button
                              className="badge bg-success ms-2 outLine"
                              onClick={() => handleShowSingle(product._id)}
                            >
                              Show Now
                            </button>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <a href className="text-reset">
                        <h5 className="card-title mb-3">{product.name}</h5>
                      </a>
                      <a href className="text-reset">
                        <p>{product.description}</p>
                      </a>
                      <h6 className="mb-3">
                        <s>₹{product.price + 100}</s>
                        <strong className="ms-2 text-danger">
                          ₹{product.price}
                        </strong>
                      </h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Craete Product Model  */}
      <Modal show={showCreateModel} onHide={createhandleClose}>
        <Form onSubmit={handleSubmit(createDataSunmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Create Products</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Require",
                  },
                })}
              />
              <Form.Text className="text-muted">
                {errors.name?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter product price"
                name="price"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is Require",
                  },
                })}
              />
              <Form.Text className="text-muted">
                {errors.price?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter product description"
                {...register("description", {
                  required: {
                    value: true,
                    message: "description is Require",
                  },
                })}
              />
              <Form.Text className="text-muted">
                {errors.description?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBrand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter brand name"
                {...register("brand", {
                  required: {
                    value: true,
                    message: "brand is Require",
                  },
                })}
              />
              <Form.Text className="text-muted">
                {errors.brand?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                {...register("image", {
                  required: {
                    value: true,
                    message: "image is Require",
                  },
                })}
              />
              <Form.Text className="text-muted">
                {errors.image?.message}
              </Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={createhandleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default Products;
