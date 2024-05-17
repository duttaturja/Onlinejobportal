import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Footer>
      <aside>
        <Link to="/">
          <img src="../src/assets/logo.png" />
        </Link>
        <p>
          WorkNest Private Limited <br /> Providing jobs since 2018
        </p>
        <p>Copyright © 2024 - All right reserved by WorkNest Pvt Ltd</p>
      </aside>
    </Footer>
  );
};

export default Footer;
