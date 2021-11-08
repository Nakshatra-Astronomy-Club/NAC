import React from 'react'
import img from './1.png';
import AboutBg from './1876.jpg';

const AboutUsPage = () => {
  return ( <
      div >
      <
      div id = "about"
      style = {
        {
          paddingBottom: '2%',
          paddingLeft: "2%",
          height: '60vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexDirection: 'column',
          background: `rgba(0,0,0,0.4) url(${AboutBg}) no-repeat center center/cover`,
          backgroundBlendMode: 'darken'
        }
      } >
      <
      h4 style = {
        {
          color: 'white'
        }
      } > About < /h4> <
      h1 style = {
        {
          color: 'white'
        }
      } > Nakshatra Astronomy Club < /h1> < /
      div > {
        /* <!-- Upper Section About Page --> */
      } <
      section >
      <
      div className = "core-container" >
      <
      div className = "about-container" >
      <
      img className = 'img-vector'
      src = {
        img
      }
      alt = "" / >
      <
      /div> <
      div className = "about-container" >
      <
      h2 className = 'our-team' > What is NAC < /h2> <
      p > Nakshatra Astronomy Club is an initiative taken up by the students of all the departments.It is a platform
      for communication and organizing different kinds of events
      for astronomy and astrophysics enthusiasts and sky admirers.After consistent efforts of students, this club was established on 2n d January, 2020. This society in our college AIMS to nurture students in that direction which will open a completely untouched field
      for the students to explore themselves, not only do we aim to cover all the technical aspects of it but the philosophical aspects as well. < /p> <p>The club aims to nurture students and expose them to a completely new field of astronomy and astrophysics.</p>< /
      div >

      <
      /div> {
      /* <!-- Two cards of Adkar sir and Atharv--> */
    } <
    div className = "core-container" >
    <
    div className = "card-container" >
    <
    img className = "round"
  src = "https://ik.imagekit.io/datap/Nakshatra/adkar_sir_dfZrvVhrQ.png?updatedAt=1635833581703"
  alt = "user" / >
    <
    h3 > Dr.D.S.Adkar < /h3> <
  h6 > Faculty Coordinator < /h6>
  <
  p className = 'socials-text' >
     <
    /p>
    < /
  div >
    <
    div className = "card-container" >
    <
    img className = "round"
  src = "https://ik.imagekit.io/datap/Ekta_Ghate_PAjCXHlAeTz.png?updatedAt=1636003854181"
  alt = "user" / >
    <
    h3 > Dr. Ekata Ghate < /h3> <
  h6 > Faculty Coordinator < /h6> <
  p className = 'socials-text' >
    <
    /p> < /
  div >
    <
    div className = "card-container" >
    <
    img className = "round"
  src = "https://ik.imagekit.io/datap/Nakshatra/Atharv_dFR_5NRlx?updatedAt=1635832237367"
  alt = "user" / >
    <
    h3 > Atharv Muley < /h3> <
  h6 > Founder < /h6> <
  p className = 'socials-text' >
  <
    /p> < /
  div > <
    /div> < /
  section >

    {
      /* <!-- Core 2021 Profile cards --> */
    }

    <
    section id = "team" >
    <
    h2 className = 'our-team' > Our Team < /h2> <
  div className = "core-container" >
    <
    div className = "card-container" >
    <
    img className = "round"
  src = "https://ik.imagekit.io/datap/Nakshatra/IMG_20190906_232436_165_UUWQts-bH.jpg?updatedAt=1635831354403&tr=w-1080,h-1080,fo-auto"
  alt = "user" / >
    <
    h3 > Ankita Zadoo < /h3> <
  h6 > President < /h6> < /
  div > <
    div className = "card-container" >
    <
    img className = "round"
  src = "https://ik.imagekit.io/datap/Nakshatra/Priyanka_VA3LS52nY.jpeg?updatedAt=1636351728294"
  alt = "user" / >
    <
    h3 > Priyanka Lakariya < /h3> <
  h6 > Vice President < /h6> < /
  div > <
    div className = "card-container" >
    <
    img className = "round"
  src = "https://ik.imagekit.io/datap/Nakshatra/Aditya_Daphal_06WGpo7mx.jpeg?updatedAt=1635833543946&tr=w-1080,h-1080,fo-auto"
  alt = "user" / >
    <
    h3 > Aditya Daphal < /h3> <
  h6 > SECRETARY < /h6>

    <
    /div> <
  div className = "card-container" >
    <
    img className = "round"
  src = "https://ik.imagekit.io/datap/Nakshatra/Tanmay_1vwwRHkxQMx.jpg?updatedAt=1635831348442"
  alt = "user" / >
    <
    h3 > Tanmay Jagtap < /h3> <
  h6 > TREASURER < /h6>

    <
    /div> <
  div className = "card-container" >
    <
    img className = "round"
  src = "https://ik.imagekit.io/ec/team/profile-pic__8__qXamxy2Hb.png?updatedAt=1634967284650"
  alt = "user" / >
    <
    h3 > Aishwarya Mapari < /h3> <
  h6 > DOCUMENTATION HEAD < /h6>

    <
    /div> <
  div className = "card-container" >
    <
    img className = "round"
  src = "https://ik.imagekit.io/datap/Nakshatra/IMG-20210816-WA0099-02_VV74HaIfb.jpeg?updatedAt=1635831351307&tr=w-1080,h-1080,fo-auto"
  alt = "user" / >
    <
    h3 > Nachiket Deshpande < /h3> <
  h6 > Department Head < /h6>

    <
    /div> <
  div className = "card-container" >
    <
    img className = "round"
  src = "https://ik.imagekit.io/datap/Nakshatra/Pratik_-cVSlXdjAlG.jpeg?updatedAt=1635831345953&tr=w-1080,h-1080,fo-auto"
  alt = "user" / >
    <
    h3 > Pratik Sakhare < /h3> <
  h6 > Department Head < /h6> < /
  div > <
    div className = "card-container" >
    <
    img className = "round"
  src = "https://ik.imagekit.io/datap/Nakshatra/Pratiksha_hqWWVf5WKXb.jpg?updatedAt=1635831351826"
  alt = "user" / >
    <
    h3 > Pratiksha Surve < /h3> <
  h6 > Department Head < /h6> < /
  div > <
    div className = "card-container" >
    <
    img className = "round"
  src = "https://ik.imagekit.io/dv/profile-pic__29__xg8AWeJVFoV.png?updatedAt=1633086038655"
  alt = "user" / >
    <
    h3 > Rashmi Mali < /h3> <
  h6 > Department Head < /h6> < /
  div > <
    div className = "card-container" >
    <
    img className = "round"
  src = "https://ik.imagekit.io/datap/Nakshatra/Uday__1__kFqmKRDyN.jpg?updatedAt=1635831353293&tr=w-1080,h-1080,fo-auto"
  alt = "user" / >
    <
    h3 > Uday Girhepunje < /h3> <
  h6 > SOCIAL - MEDIA HEAD < /h6> < /
  div > <
    div className = "card-container" >
    <
    img className = "round"
  src = "https://ik.imagekit.io/datap/Nakshatra/Gaurav_U4B3MU5AH3J.png?updatedAt=1635831354220"
  alt = "user" / >
    <
    h3 > Gaurav Kulkarni < /h3> <
  h6 > MARKETING & SPONSORSHIP HEAD < /h6> < /
  div > <
    div className = "card-container" >
    <
    img className = "round"
  src = "https://ik.imagekit.io/datap/Nakshatra/profile-pic__5___1__B3keqSgz3Cf.png?updatedAt=1635833859145"
  alt = "user" / >
    <
    h3 > Ranu Mishra < /h3> <
  h6 > SOCIAL - MEDIA Coordinator < /h6> < /
  div >

    <
    /div> < /
  section > {
      /* <!-- Core section ends --> */
    } <
    /div>
)
}

export default AboutUsPage
