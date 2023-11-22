import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagram } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/shakti7093" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Shakti-7093" target="_blank">
        <FaGithub/>
      </a>
      <a href="https://www.instagram.com/shakti_7755/" target="_blank"><FaInstagram/></a>
    </div>
  );
};

export default HeaderSocials;
