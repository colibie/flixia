import React from 'react';
import './header.css'
import { NavLink } from 'react-router-dom'


const Header = (props) => {
 
    return (
        <div className="main">
            <div className="logo left">
                <h1>{props.logo}</h1>
            </div>
            <div className="menu">
                <div className="home-data">
                    {props.data.map(item => (
                        <span className="right">
                            <NavLink to={item.link}>
                                {item.name}
                            </NavLink>
                        </span>
                    ))}
                        <form>
                        <input type="text"
                            placeholder="Enter search term"
                            className="isearch right"
                        />
                        <button className="hbtn" type="submit"></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header;