import React from 'react';
//import { Container,Row,Col } from 'react-bootstrap';
import './footer.css'

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h5>General</h5>
          <ul className="list-unstyled">
              <li><a href="/">Home</a></li> 
              <li><a href="/about">About</a></li>
              <li><a href="/pricing">Pricing</a></li> 
            </ul>
        </div>
        <div className="col-md-3">
          <h5>Register</h5>
          <ul className="list-unstyled">
                <li><a href="/register">Register</a></li> 
                <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Help</h5>
          <ul className="list-unstyled">
              <li><a href="/docs">Documentation</a></li>
               <li><a href="/contact">Contact Us</a></li> 
               <li><a href="/terms">Terms &amp; Policies</a></li>
            </ul>
        </div>
        <div className="col-md-3">
          <h5>Company</h5>
          <p>Fox sense Innovations</p>
          <p><a href="mailto:sales@foxsense.com" className="external-links">sales@foxsense.com</a></p>
        </div>
      </div> 
      <div className="border-top border-secondary pt-3 text-center">
            <div className="size-6 text-white">
                Copyright © 2020 PROCMON
            </div>
          </div>
    </div>
  </footer>
    
);

export default Footer;
