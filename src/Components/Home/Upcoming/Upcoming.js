import React from "react";
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
            <div className="col mb-4">
              <div className="card">
                <img
                  src="https://dummyimage.com/600x400/72f2cc/2432f2.png&text=Dummy+Image"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-info"> Event Title </h5>{" "}
                  <p className="card-text text-black">
                    {" "}
                    This is a longer card with supporting text below as a
                    natural lead - in to additional content.This content is a
                    little bit longer.{" "}
                  </p>{" "}
                  <button
                    type="button"
                    name="button"
                    className="btn btn-primary mx-3"
                  >
                    {" "}
                    Register{" "}
                  </button>{" "}
                  <button
                    type="button"
                    name="button"
                    className="btn btn-secondary"
                  >
                    {" "}
                    Join{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col mb-4">
              <div className="card">
                <img
                  src="https://dummyimage.com/600x400/72f2cc/2432f2.png&text=Dummy+Image"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-info"> Event Title </h5>{" "}
                  <p className="card-text text-black">
                    {" "}
                    This is a longer card with supporting text below as a
                    natural lead - in to additional content.This content is a
                    little bit longer.{" "}
                  </p>{" "}
                  <button
                    type="button"
                    name="button"
                    className="btn btn-primary mx-3"
                  >
                    {" "}
                    Register{" "}
                  </button>{" "}
                  <button
                    type="button"
                    name="button"
                    className="btn btn-secondary"
                  >
                    {" "}
                    Join{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col mb-4">
              <div className="card">
                <img
                  src="https://dummyimage.com/600x400/72f2cc/2432f2.png&text=Dummy+Image"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-info"> Event Title </h5>{" "}
                  <p className="card-text text-black">
                    {" "}
                    This is a longer card with supporting text below as a
                    natural lead - in to additional content.{" "}
                  </p>{" "}
                  <button
                    type="button"
                    name="button"
                    className="btn btn-primary mx-3"
                  >
                    {" "}
                    Register{" "}
                  </button>{" "}
                  <button
                    type="button"
                    name="button"
                    className="btn btn-secondary"
                  >
                    {" "}
                    Join{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
      <section>
        <h2 className="text-center my-3 py-3"> Activites so far </h2>{" "}
        <div className="container mb-3">
          <div className="row row-cols-1 row-cols-md-3">
            <div className="col mb-4">
              <div className="card">
                <img
                  src="https://dummyimage.com/600x400/72f2cc/2432f2.png&text=Dummy+Image"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-info"> Event Title </h5>{" "}
                  <p className="card-text text-black">
                    {" "}
                    This is a longer card with supporting text below as a
                    natural lead - in to additional content.This content is a
                    little bit longer.{" "}
                  </p>{" "}

                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col mb-4">
              <div className="card">
                <img
                  src="https://dummyimage.com/600x400/72f2cc/2432f2.png&text=Dummy+Image"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-info"> Event Title </h5>{" "}
                  <p className="card-text text-black">
                    {" "}
                    This is a longer card with supporting text below as a
                    natural lead - in to additional content.This content is a
                    little bit longer.{" "}
                  </p>{" "}

                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col mb-4">
              <div className="card">
                <img
                  src="https://dummyimage.com/600x400/72f2cc/2432f2.png&text=Dummy+Image"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-info"> Event Title </h5>{" "}
                  <p className="card-text text-black">
                    {" "}
                    This is a longer card with supporting text below as a
                    natural lead - in to additional content.{" "}
                  </p>{" "}

                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="row">
          <HashLink
            to="/events/#events"
            type="button"
            name="button"
            className="btn btn-primary mx-auto col-md-2"
          >
            {" "}
            See more{" "}
          </HashLink>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
};

export default Upcoming;
