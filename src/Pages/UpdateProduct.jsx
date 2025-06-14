import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../Api/axiosInstance";
import { single_product_end, update_product_end } from "../Api/end_point";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  useEffect(() => {
    axiosInstance(single_product_end + id)
      .then((res) => {
        // console.log(res.data.data);
        reset({ ...res.data.data });
      })
      .catch((err) => console.log(err));
  }, []);

  const createDataSunmit = (data) => {
    console.log("Form Data ", data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("brand", data.brand);
    formData.append("image", data.image[0]);

    axiosInstance.post(update_product_end + id, formData).then((res) => {
      console.log(res.data);
      alert("Product Update Successfully");
      navigate("/products");
    });
  };
  return (
    <>
      <br />
      <div className="container">
        <Form onSubmit={handleSubmit(createDataSunmit)} className="allform">
          <h1 className="text-center">Update Product</h1>
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

          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
        <br />
      </div>
    </>
  );
};

export default UpdateProduct;
