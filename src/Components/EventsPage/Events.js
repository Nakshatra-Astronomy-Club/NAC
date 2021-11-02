import React from 'react'
import past from "../Home/Upcoming/past";
import upcoming_data from "../Home/Upcoming/upcoming_data";
import EventsBg from './2474066.jpg';
import Upcoming from '../Home/Upcoming/Upcoming';

const Events = () => {
    return (
        <div>
        <div id="events" style={{paddingBottom:'2%', paddingLeft:"2%", height:'60vh', width:'100vw', display:'flex', justifyContent:'center', alignItems:'flex-start', flexDirection:'column', background:`rgba(0,0,0,0.4) url(${EventsBg}) no-repeat center center/cover` , backgroundBlendMode:'darken'}}>
            <h4 style={{color:'white'}}>Events by</h4>
            <h1 style={{color:'white'}}>Nakshatra Astronomy Club</h1>
        </div>
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
                          Register{" "}
                        </a>{" "}
                        <a
                        href={data.join_link}
                          type="button"
                          name="button"
                          className="btn btn-secondary"
                          target="_blank"
                        >
                          {" "}
                          Join{" "}
                        </a>{" "}
                      </div>{" "}
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
                past.map( (data) => {
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
        </div>
    )
}

export default Events
