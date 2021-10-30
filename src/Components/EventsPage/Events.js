import React from 'react'
import EventsBg from './2474066.jpg';
import Upcoming from '../Home/Upcoming/Upcoming';

const Events = () => {
    return (
        <div>
        <div id="events" style={{paddingBottom:'2%', paddingLeft:"2%", height:'60vh', width:'100vw', display:'flex', justifyContent:'center', alignItems:'flex-start', flexDirection:'column', background:`rgba(0,0,0,0.4) url(${EventsBg}) no-repeat center center/cover` , backgroundBlendMode:'darken'}}>
            <h4 style={{color:'white'}}>Events by</h4>
            <h1 style={{color:'white'}}>Nakshatra Astronomy Club</h1>
        </div>
        <Upcoming/>
        </div>
    )
}

export default Events
