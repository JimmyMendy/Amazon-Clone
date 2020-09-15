import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__section">
        <h3 className="footer__title">
          Get To Now Us
        </h3>
        <p>Careers</p>
        <p>Blog</p>
        <p>About Amazon</p>
        <p>Amazon Devices</p>
      </div>
      <div className="footer__section">
        <h3 className="footer__title">
          Make Money with us
        </h3>
        <p>Sell on Amazon</p>
        <p>Sell on Amazon Business</p>
        <p>Sell your apps on Amazon</p>
        <p>Become an Affiliate</p>
        <p>Advertise Your Products</p>
        <p>Self-Publish with Us</p>
        <p>Host an Amazon Hub</p>
      </div>
      <div className="footer__section">
        <h3 className="footer__title">
          Amazon Payment Products
        </h3>
        <p>Amazon Business Card</p>
        <p>Shop with Points</p>
        <p>Reload your Balance</p>
        <p>Amazon Currency Converter</p>
      </div>
      <div className="footer__section">
        <h3 className="footer__title">
          Let Us Help You
        </h3>
        <Link to='/Orders' style={{ textDecoration: 'none'}}>
          <p className="footer__link">Your Orders</p>
        </Link>
        <p>Shipping Rates & Policies</p>
        <p>Returns & Replacements</p>
        <p>Manage Your Content and Devices</p>
        <p>Amazon Assistant</p>
        <p>Help</p>
      </div>
    </div>
  )
}

export default Footer
