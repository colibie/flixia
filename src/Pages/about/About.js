import React from 'react';
import '../general_style.css'
import Header from '../components/header'
import Footer from '../components/footer';
import GuttersGrid from '../components/cardSet'

const About = () => {
return (
    <div>
        <Header />
        <div className="container general">
            <h1>checkout our awesome personnels</h1>
        </div>
        <GuttersGrid />
        <br/>
        <Footer />
    </div>
)
}

export default About;