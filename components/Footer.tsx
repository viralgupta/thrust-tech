import React from "react";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <ul>
        <li>ThrustTechIndia&nbsp;&copy;&nbsp;{year}</li>
        <li>
          <a target="_blank" rel="noopener" href="https://www.instagram.com/thrusttechindia/">Instagram</a>
        </li>
        <li>
          <a target="_blank" rel="noopener" href="https://www.linkedin.com/company/thrust-tech-india">LinkedIn</a>
        </li>
        <li>
          <a target="_blank" rel="noopener" href="https://www.youtube.com/@ThrustTech">YouTube</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
