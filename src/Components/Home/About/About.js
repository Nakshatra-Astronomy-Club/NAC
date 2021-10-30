import React from "react";
import "./About.css";
import img from "./2.png";
import { HashLink } from "react-router-hash-link";

const About = () => {
  return (
    <section
      className="about"
      id="about"
      style={{
        color: "white",
        marginTop: "3%",
      }}
    >
      <div className="container">
        <h2
          style={{
            marginBottom: "0",
          }}
          className="text-center"
        >
          {" "}
          About Us{" "}
        </h2>{" "}
        <div className="row align-items-center">
          <div className="col-md-7 ">
            <p className="text-black justify-content-center p-3">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </p>{" "}
          </div>{" "}
          <div className="col-md-5">
            <img src={img} alt="illustration" />
          </div>{" "}
        </div>{" "}
        <div className="row">
          <ul className="d-flex justify-content-center list-inline">
            <li>
              {" "}
              <HashLink to="/aboutus/#about" className="btn btn-dark p-3 m-3">
                {" "}
                Learn more{" "}
              </HashLink>
            </li>
            <li>
              {" "}
              <HashLink to="/aboutus/#team" className="btn btn-dark p-3 m-3" >
                {" "}
                Meet the team{" "}
              </HashLink>
            </li>
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default About;
