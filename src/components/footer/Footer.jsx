import React from 'react';
import './Footer.css';
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">Shakti Singh Chundawat</a>

      <ul className='permalinks'>
        <li><a href="#">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      <div className="footer_social">
        <a href="https://github.com/Shakti-7093" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/shakti7093" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://www.instagram.com/shakti_7755/" target="_blank" rel="noreferrer"><BsInstagram/></a>
        <a href="https://www.youtube.com/channel/UCp_1piyCGLoFl4ydMVDixuQ" target="_blank" rel="noreferrer"><BsYoutube/></a>
      </div>

      <div className="footer_copyright">
        <small>
          &copy; SHAKTI DEVELOPERS || All right's recserved.
        </small>
      </div>
    </footer>
  )
};

export default Footer