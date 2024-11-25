import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h4>Rodeva</h4>
          <p>
          Beautiful, custom-built digital experiences crafted with passion and precision.
          </p>
          <p>&copy; {new Date().getFullYear()} Rodeva. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/OmarBr1/Todo-List.git" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a href="mailto:rodeva.omar@outlook.com?subject=I want to hire you" target="_blank" rel="noopener noreferrer">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
