import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../Api/axiosInstance";
import { update_password_end, user_end } from "../Api/end_point";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Dashboard = () => {
  const [data, setData] = useState({});
  const [update, setUpdate] = useState({ password: "" });

  useEffect(() => {
    axiosInstance.get(user_end).then((res) => {
      console.log(res.data.data[0]);
      setData(res.data.data[0]);
    });
  }, []);
  const handleUpdatePass = (e) => {
    e.preventDefault();
    axiosInstance
      .post(update_password_end, { ...update, user_id: data._id })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          alert("Password Update Successfuly");
        }
      })
      .catch((err) => console.log(err));
  };

  const image = `https://webskitters-student.onrender.com/${data.image}`;
  return (
    <>
      <section
        className="w-100 px-4 py-5"
        style={{ borderRadius: ".5rem .5rem 0 0" }}
      >
        <div className="row d-flex justify-content-center">
          <div className="col col-md-9 col-lg-7 col-xl-6">
            <div
              className="card"
              style={{ borderRadius: 15, border: "1px solid #490648" }}
            >
              <div className="card-body p-4">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <img
                      src={image}
                      alt="Generic placeholder image"
                      className="img-fluid"
                      style={{ width: 180, borderRadius: 10 }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">
                      <b>{data.name}</b>
                    </h5>
                    <p className="mb-2 pb-1">
                      <b>Email</b> {data.email}
                    </p>
                    <p className="mb-2 pb-1">
                      <b>Phone</b> {data.mobile}
                    </p>
                    <p className="mb-2 pb-1">
                      <b>First School </b> :- {data.first_school}
                    </p>

                    <Form onSubmit={handleUpdatePass}>
                      <div className="d-flex align-items-center gap-2">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Update Your Password</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter New Password"
                            // defaultValue="hjjsa"
                            name="password"
                            onChange={(e) =>
                              setUpdate({ ...update, password: e.target.value })
                            }
                          />
                        </Form.Group>
                        <Button
                          variant="primary"
                          type="submit"
                          className="mt-3"
                        >
                          Submit
                        </Button>
                      </div>
                    </Form>
                    <br />
                    <div className="d-flex pt-1">
                      <Link to="/products">
                        <button
                          type="button"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary flex-grow-1"
                        >
                          Show Products
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
