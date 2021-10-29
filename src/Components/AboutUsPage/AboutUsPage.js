import React from 'react'
import img from './1.png';

const AboutUsPage = () => {
    return (
        <div>
            {/* <!-- Upper Section About Page --> */}
  <section>
    <div className="core-container">
      <div className="about-container">
        <img className='img-vector' src={img} alt=""/>
      </div>
      <div className="about-container">
        <h2 className='our-team'>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

    </div>
    {/* <!-- Two cards of Adkar sir and Atharva --> */}
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
        <h3>Atharva Mule</h3>
        <h6>Designation</h6>
        <p className='socials-text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </section>

  {/* <!-- Core 2021 Profile cards --> */}

  <section>
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

    </div>
  </section>
  {/* <!-- Core section ends --> */}
        </div>
    )
}

export default AboutUsPage
