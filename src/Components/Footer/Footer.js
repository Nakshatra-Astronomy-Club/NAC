import React from "react";
import {FaFacebookF} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {SiDiscord} from 'react-icons/si';
import {HiMail} from 'react-icons/hi';
// import {ImTwitter} from 'react-icons/im';
// import {FaLinkedinIn} from 'react-icons/fa';

const Footer = () => {
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'black', padding:'6px'}}>
      <a
        className="white"
        href="https://www.facebook.com/debugged.exe.1"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF size="1.5rem" className="mh2" color="white" style={{margin:'6px' }} />
      </a>
      <a
        className="white"
        href="https://www.instagram.com/debugged.exe/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillInstagram size="1.5rem" className="mh2" color="white" style={{margin:'6px' }} />
      </a>
      <a
        className="white"
        href="https://discord.gg/MDDDDarXNF"
        target="_blank"
        rel="noreferrer"
      >
        <SiDiscord size="1.5rem" className="mh2" color="white" style={{margin:'6px' }} />
      </a>
      <a
        className="white"
        href="mailto:team.debugged.exe@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <HiMail size="1.5rem" className="mh2" color="white" style={{margin:'6px' }} />
      </a>
      {/* <a
        className="white"
        href="https://twitter.com/ExeDebugged?s=08"
        target="_blank"
        rel="noreferrer"
      >
        <ImTwitter size="1.5rem" className="mh2" color="white" style={{margin:'6px' }} />
      </a> */}
      {/* <a
        className="white"
        href="https://www.linkedin.com/company/debugged-exe/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn size="1.5rem" className="mh2" color="white" style={{margin:'6px' }} />
      </a> */}
    </div>
  );
};

export default Footer;
