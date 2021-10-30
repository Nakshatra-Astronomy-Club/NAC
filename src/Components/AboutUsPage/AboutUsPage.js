import React from 'react'
import img from './1.png';
import AboutBg from './1876.jpg';

const AboutUsPage = () => {
    return (
        <div>
  <div id="about" style={{paddingBottom:'2%', paddingLeft:"2%", height:'60vh', width:'100vw', display:'flex', justifyContent:'center', alignItems:'flex-start', flexDirection:'column', background:`rgba(0,0,0,0.4) url(${AboutBg}) no-repeat center center/cover` , backgroundBlendMode:'darken'}}>
            <h4 style={{color:'white'}}>About</h4>
            <h1 style={{color:'white'}}>Nakshatra Astronomy Club</h1>
        </div>
            {/* <!-- Upper Section About Page --> */}
  <section>
    <div className="core-container">
      <div className="about-container">
        <img className='img-vector' src={img} alt=""/>
      </div>
      <div className="about-container">
        <h2 className='our-team'>What is NAC</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

    </div>
    {/* <!-- Two cards of Adkar sir and Atharv--> */}
    <div className="core-container">
      <div className="card-container">
        <img className="round" src="https://dummyimage.com/500/000/fff" alt="user" />
        <h3>Dr. D. S. Adkar</h3>
        <h6>Designation</h6>
        <p className='socials-text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="card-container">
        <img className="round" src="https://dummyimage.com/500/000/fff" alt="user" />
        <h3>Atharv Muley</h3>
        <h6>Designation</h6>
        <p className='socials-text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </section>

  {/* <!-- Core 2021 Profile cards --> */}

  <section id="team">
    <h2 className='our-team'>Our Team</h2>
    <div className="core-container">
      <div className="card-container">
        <img className="round" src="https://dummyimage.com/500/000/fff" alt="user" />
        <h3>Name Surname</h3>
        <h6>Designation</h6>
      </div>
      <div className="card-container">
        <img className="round" src="https://dummyimage.com/500/000/fff" alt="user" />
        <h3>Name Surname</h3>
        <h6>Designation</h6>
      </div>
      <div className="card-container">
        <img className="round" src="https://dummyimage.com/500/000/fff" alt="user" />
        <h3>Name Surname</h3>
        <h6>Designation</h6>

      </div>
      <div className="card-container">
        <img className="round" src="https://dummyimage.com/500/000/fff" alt="user" />
        <h3>Name Surname</h3>
        <h6>Designation</h6>

      </div>
      <div className="card-container">
        <img className="round" src="https://dummyimage.com/500/000/fff" alt="user" />
        <h3>Name Surname</h3>
        <h6>Designation</h6>

      </div>
      <div className="card-container">
        <img className="round" src="https://dummyimage.com/500/000/fff" alt="user" />
        <h3>Name Surname</h3>
        <h6>Designation</h6>

      </div>
      <div className="card-container">
        <img className="round" src="https://dummyimage.com/500/000/fff" alt="user" />
        <h3>Name Surname</h3>
        <h6>Designation</h6>
      </div>
      <div className="card-container">
        <img className="round" src="https://dummyimage.com/500/000/fff" alt="user" />
        <h3>Name Surname</h3>
        <h6>Designation</h6>
      </div>
      <div className="card-container">
        <img className="round" src="https://dummyimage.com/500/000/fff" alt="user" />
        <h3>Name Surname</h3>
        <h6>Designation</h6>
      </div>
      <div className="card-container">
        <img className="round" src="https://dummyimage.com/500/000/fff" alt="user" />
        <h3>Name Surname</h3>
        <h6>Designation</h6>
      </div>
      <div className="card-container">
        <img className="round" src="https://dummyimage.com/500/000/fff" alt="user" />
        <h3>Name Surname</h3>
        <h6>Designation</h6>
      </div>
      <div className="card-container">
        <img className="round" src="https://dummyimage.com/500/000/fff" alt="user" />
        <h3>Name Surname</h3>
        <h6>Designation</h6>
      </div>

    </div>
  </section>
  {/* <!-- Core section ends --> */}
        </div>
    )
}

export default AboutUsPage
