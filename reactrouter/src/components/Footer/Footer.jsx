import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="navbar">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
    </footer>
  );
}

export default Footer;
