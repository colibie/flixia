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
                        <h1> Lances Consult </h1>
                        <p>Property consultancy</p>
                        <p className="sign"> &copy; Copyright 2018 </p>
                    </div>
                    <div className="box box2">
                        <div className="equal">
                            <ul>
                                <li>Travelers</li>
                                <li>Travelers</li>
                                <li>Travelers</li>
                                <li>Travelers</li>
                            </ul>
                        </div>
                        <div className="right">
                            <li><NavLink to="/"> Home </NavLink></li>
                            <li><NavLink to="/about"> About Us </NavLink> </li>
                            <li><NavLink to="/contact"> Contact Us today </NavLink> </li>                   
                        </div>
                        {/* <p>
                            Lorem ipsum <br />
                            <button className="btn btn-lg btn-success">Joshe</button>
                        </p> */}
                    </div>
                    <div className="box1">
                        from now on, we come back home here again
                    </div>
                    <div className="box2">
                        Lorem ipsum is where we meet again
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;