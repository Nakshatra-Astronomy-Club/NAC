import React from 'react'
import { HashLink } from "react-router-hash-link";

import Home from './Home'
import About from './About/About';
import Upcoming from './Upcoming/Upcoming';

const HomePage = () => {
    return (
        <div>
            <Home/>
            <About/>
            <Upcoming/>
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
        </div>
    )
}

export default HomePage
