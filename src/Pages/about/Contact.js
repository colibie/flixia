import React from 'react';
import {NavLink} from 'react-router-dom';
import Header from '../components/header'
import '../general_style.css'
import Footer from '../components/footer'


const Contact = () => {
return (
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
        <div className="container general">
            <h1> In skyfall, this is my contact </h1>
            <span> <NavLink to="/"> Home </NavLink></span>
            <span> <NavLink to="/about"> About </NavLink></span>
        </div>
        <Footer />
    </div>
)
}


export default Contact;