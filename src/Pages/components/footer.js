import React from 'react';
import {NavLink} from 'react-router-dom'
import 'reactstrap'
import './footer.css'

const Footer = () => {
    return(
        <div>
            <div className="footer">
                <div className="big-box">
                    <div className="box dem box1">
                        <h1> NMDb </h1>
                        <p>Nollywood Movie Database</p>
                        <p className="sign"> &copy; Copyright 2018, All rights reserved </p>
                    </div>
                    <div className="box box2">
                        <div className="equal">
                            <ul style={{ paddingLeft: 0, fontWeight: 'bolder'}}>
                                <li>MOVIES</li>
                                <li>TV SHOWS</li>
                                <li>CELEBS</li>
                                <li>NEWS</li>
                            </ul>
                        </div>
                        <div className="contact">
                            <li><NavLink to="/about"> About </NavLink></li>
                            <li><NavLink to="/termsofservice"> Terms Of Service </NavLink> </li>                   
                            <li><NavLink to="/privacy"> Privacy Policy </NavLink> </li>                   
                        </div>
                        
                    </div>
                    <div className="box1">
                        <p><b> FOLLOW US </b></p>
                            <span><b className="fa fa-facebook"></b> &nbsp;&nbsp; Facebook </span><br />
                            <span><b className="fa fa-twitter"></b> &nbsp; Twitter </span><br />
                            <span><b className="fa fa-instagram"></b> &nbsp; Instagram </span><br />
                            <span><b className="fa fa-google"></b> &nbsp; Google </span><br />
                    </div>
                    <div className="box2 no-box">
                       <span><b>SUBSCRIBE TO OUR NEWS</b></span>
                        <br />
                        <span>
                            Don't miss out on our amazing contents, we keep you up to date
                        </span><br />
                        <form>
                            <input type="text"
                                placeholder="Your Email"
                                className="subscribe"
                            />
                            <button className="btn btn-md btn-warning hidden">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;