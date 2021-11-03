import React from "react";
import past from "./past";
import upcoming_data from "./upcoming_data";
import { HashLink } from "react-router-hash-link";


const Upcoming = () => {
  return (
    <div
      style={{
        color: "white",
        marginTop: "10px",
      }}
    >
      <section id="upcomingevents">
        <h2 className="text-center my-3 py-3"> Upcoming Events </h2>{" "}
        <div className="container mb-3">
          <div className="row row-cols-1 row-cols-md-3">
          {
            upcoming_data.map( (data) => {
              return (<div className="col mb-4">
                <div className="card">
                  <img
                    src={data.Imgurl}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-info">{data.Title} </h5>{" "}
                    <p className="card-text text-black">
                      {" "}
                      {data.Desc}
                    </p>{" "}
                    <a
                    href={data.reg_link}
                      type="button"
                      name="button"
                      className="btn btn-primary mx-3"
                      target="_blank"
                    >
                      {" "}
                      Registration coming soon{" "}
                    </a>{" "}

                  </div>
                </div>{" "}
              </div>)
            })
          }

          </div>{" "}
        </div>{" "}
      </section>
      <section>
        <h2 className="text-center my-3 py-3"> Activites so far </h2>{" "}
        <div className="container mb-3">
          <div className="row row-cols-1 row-cols-md-3">

          {
            past.slice(0,3).map( (data) => {
              return (
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src={data.Imgurl}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-info"> {data.Title} </h5>{" "}
                      <p className="card-text text-black">
                        {" "}
                        {data.Desc}{" "}
                      </p>{" "}

                    </div>{" "}
                  </div>{" "}
                </div>
              )})
          }



          </div>{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
};

export default Upcoming;
