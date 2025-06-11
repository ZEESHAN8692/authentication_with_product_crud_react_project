import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <br />
      <div className="d-flex justify-content-center flex-column align-items-center">
        <div>
          <h1 className="text-center homepageHeading">
            Welcome to Awesome Store{" "}
          </h1>
        </div>
        <br />
        <br />
        <div>
          <img
            src="https://media.istockphoto.com/id/479629586/vector/pointing-at-himself-emoticon-pick-me.jpg?s=612x612&w=0&k=20&c=GJCnkPuG0n2gofzk22VHvBeueLYugg26EWH8vmIyix0="
            alt=""
            height={"150px"}
          />
        </div>
        <br />
        <div className="homeLogin">
          <Link to="/login" className="text-white homeLoginlink">
            Go to Login Page{" "}
          </Link>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Home;
