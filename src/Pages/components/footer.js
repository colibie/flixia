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
                            {/* <li><NavLink to="/about"> Contact </NavLink> </li> */}
                            <li><NavLink to="/termsofservice"> Terms Of Service </NavLink> </li>                   
                            <li><NavLink to="/privacy"> Privacy Policy </NavLink> </li>                   
                        </div>
                        
                    </div>
                    <div className="box1">
                        <p><b> FOLLOW US </b></p>
                        {/* <p> */}
                            <p><b className="fa fa-facebook"></b> &nbsp; Facebook </p>
                            <p><b className="fa fa-twitter"></b> &nbsp; Twitter </p>
                            <p><b className="fa fa-instagram"></b> &nbsp; Instagram </p>
                            <p><b className="fa fa-google"></b> &nbsp; Google </p>
                        {/* </p> */}
                    </div>
                    <div className="box2 no-box">
                       <p><b>SUBSCRIBE TO OUR NEWS</b></p>
                        <br />
                        <p>
                            Don't miss out on our amazing contents, we keep you up to date
                        </p>
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