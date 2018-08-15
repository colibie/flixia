import React from 'react';
import {NavLink} from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import '../general_style.css';
import './Error.css';


const Error = () => {
    return(
        <div>
            <Header 
                logo="Best"
                // the data represents the header data and their routes link
                // please check the app.js to make sure the link exists in the 
                // Routing file
                data={[
                    {
                        name: 'Contact',
                        link: '/contact'
                    },
                    {
                        name: 'About',
                        link: '/about'
                    },
                    {
                        name: 'Home',
                        link: '/'
                    }
                ]}
            />
            <h1 className="general">Page Navigation does not Exist </h1>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/contact"> Contact </NavLink>
            <NavLink to="/about"> About </NavLink>
            <Footer />
        </div>
    );
}

export default Error;