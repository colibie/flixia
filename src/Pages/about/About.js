import React from 'react';
import '../general_style.css'
import Header from '../components/header'
import Footer from '../components/footer';
import GuttersGrid from '../components/cardSet'

const About = () => {
return (
    <div>
        <Header 
            logo="Best"
        // the data represents the header data and their routes link
        // please check the app.js to make sure the link exists in the 
        // Routing file
            data={[
                {
                    key: new Date(),
                    name: 'Contact',
                    link: '/contact'
                },
                {
                    key: new Date(),
                    name: 'About',
                    link: '/about'
                },
                {
                    key: new Date(),
                    name: 'Home',
                    link: '/'
                }
            ]}
        />
        <div className="container general">
            <h1>checkout our awesome personnels</h1>
        </div>
        <GuttersGrid />
        <hr />
        <br/>
        <Footer />
    </div>
)
}

export default About;