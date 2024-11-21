import React from 'react';
import '../styles/styles.css'; // Ensure correct path to styles
import headerImg from "../assets/header.jpg"; // Make sure the image path is correct

function Header() {
  return (
    <header className="section__container header__container">
      <h1 className="section__header">
        Find And Book<br />A Great Experience
      </h1>
      <img src={headerImg} alt="header" className="header__image" />
    </header>
  );
}

export default Header;
