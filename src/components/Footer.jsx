import React from 'react';
import '../styles/styles.css'; // Make sure the styles file is correctly imported

function Footer() {
  return (
    <footer className="footer">
      <div className="section__container footer__container">
        {/* Column for company info */}
        <div className="footer__col">
          <h3>Flivan</h3>
          <p>
            Where Excellence Takes Flight. With a strong commitment to customer satisfaction and a passion for air travel, Flivan Airlines offers exceptional service and seamless journeys.
          </p>
          <p>
            From friendly smiles to state-of-the-art aircraft, we connect the world, ensuring safe, comfortable, and unforgettable experiences.
          </p>
        </div>

        {/* Column for navigation links */}
        <div className="footer__col">
          <h4>INFORMATION</h4>
          <p>Home</p>
          <p>About</p>
          <p>Offers</p>
          <p>Seats</p>
          <p>Destinations</p>
        </div>

        {/* Column for contact links */}
        <div className="footer__col">
          <h4>CONTACT</h4>
          <p>Support</p>
          <p>Media</p>
          <p>Socials</p>
        </div>
      </div>

      {/* Footer bar with copyright and social media icons */}
      <div className="section__container footer__bar">
        <p>Copyright © 2023 Web Design Mastery. All rights reserved.</p>
        <div className="socials">
          {/* Social media icons - ensure you have the correct library or icons */}
          <span><i className="ri-facebook-fill"></i></span>
          <span><i className="ri-twitter-fill"></i></span>
          <span><i className="ri-instagram-line"></i></span>
          <span><i className="ri-youtube-fill"></i></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
