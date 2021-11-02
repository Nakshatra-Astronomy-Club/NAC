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

              Nakshatra Astronomy Club is an initiative taken up by the students of all the departments. It is a platform for communication and organizing different kinds of events for astronomy and astrophysics enthusiasts and sky admirers. After consistent efforts of students, this club was established on 2nd January, 2020. <br/><br/>{" "} The name Nakshatra is derived from the two sanskrit words nak and kshetra, nak meaning sky and kshetra meaning map, translating into skymap. The actual meaning of nakshatra is a group of stars which make up an imaginary outline or pattern in the night sky. 
            </p>
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
