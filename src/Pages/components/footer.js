import React from 'react';
import {NavLink} from 'react-router-dom'
import 'reactstrap'
import './footer.css'

const Footer = () => {
    return(
        <div>
            <div className="footer">
                <div className="big-box">
                    <div className="box dem box1 container">
                        <h1> Lances Consult </h1>
                        <p>Property consultancy</p>
                        <p className="sign"> &copy; Copyright 2018 </p>
                    </div>
                    <div className="box box2">
                        <div className="equal">
                            <ul style={{ paddingLeft: 0 adjusted the}}>
                                <li>Travelers</li>
                                <li>Travelers</li>
                                <li>Travelers</li>
                                <li>Travelers</li>
                            </ul>
                        </div>
                        <div className="contact">
                            <li><NavLink to="/"> Home </NavLink></li>
                            <li><NavLink to="/about"> About Us </NavLink> </li>
                            <li><NavLink to="/contact"> Contact Us today </NavLink> </li>                   
                        </div>
                        
                    </div>
                    <div className="box1">
                        from now on, we come back home here again
                        <p>
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="box2">
                        Lorem ipsum is where we meet againand decide what happens to solomon grandie,. then we may settle this amicably
                        <br />
                        <form>
                            <input type="text"
                                placeholder="Enter Email"
                                className="subscribe"
                            />
                            <button className="btn btn-md btn-warning">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;