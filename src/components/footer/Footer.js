import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import fb from "./fb.png";
import insta from "./insta.png";
import twitter from "./twitter.png";
import flytwitter from "./flytwitter.gif";
import tiktok from "./tiktok.png";


function Footer(){
      return(
            <footer>
                  <div id="footer">
                        <div className="company_info">
                              <h3>Grill House Restaurant</h3>
                              <p>123 George Street,</p><p> Sydney New South Wales 2000</p>
                              <p>0123456789</p>
                        </div>
                        <div className="footer-navlinks">
                              <ul>
                                    <li ><Link to="/home">Home</Link></li>
                                    <li ><Link to="/services">Services</Link></li>
                                    <li ><Link to="/menu">Menu</Link></li>
                                    <li ><Link to="/about">About</Link></li>
                                    <li ><Link to="/contact">Contact</Link></li>
                              </ul>

                        </div>
                        <div className="social">
                              <h3>Follow us</h3>
                              <div className="social-icons">
                                    <a to="https://www.facebook.com"> <img className="facebook" src={fb} alt='facebook'/> </a>
                                    <a href="https://www.instagram.com" target="_blank"> <img className="instagram" src={insta} alt='instagram'/> </a>
                                    <a href="https://www.twitter.com" target="_blank"> <img className="twitter" src={twitter} alt='twitter'/> </a>
                                    <a href="https://www.tiktok.com" target="_blank"> <img className="tiktok" src={tiktok} alt='tiktok'/> </a>

                              </div>

                        </div>

                  </div>

            </footer>

      );
}
export default Footer;