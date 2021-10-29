import React from 'react'
import HomeBg from './HomeBg.jpg';

const Home = () => {
    return (
        <div style={{paddingBottom:'2%', height:'92vh', width:'100vw', display:'flex', justifyContent:'flex-end', alignItems:'center', flexDirection:'column', color:'white', background:`rgba(0,0,0,0.4) url(${HomeBg}) no-repeat center center/cover` , backgroundBlendMode:'darken'}}>
            <h4>Welcome to</h4>
            <h1>Nakshatra Astronomy Club</h1>
            <h4>MESCOE</h4>
        </div>
    )
}

export default Home;
