import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import './home.css';
import '../general_style.css'
import PasswordComponent from '../components/password';
// import Note from '../components/note'


const Home = () => {
    return (
        <div>
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
                
            </div>
            <div className="jumbotron general">
                <div className="container fluid">
                    <h1> In skyfall, this is the </h1>
                    <h1> <NavLink to="/contact"> Contact</NavLink> </h1>
                    <span> <NavLink to="/about"> About </NavLink></span> 
                </div>
            </div>
            <span className="col-md-sm">
                <input type="text" className="text" placeholder="Enter your name over here" />
                <button className="btn btn-lg btn-success">Oluronbi</button>
            </span>
            {/* <Note /> */}
            <PasswordComponent />
            <hr />
            <Footer />
        </div>
    )
}


export default Home;