import React from 'react';
import '../general_style.css'
import Header from '../components/header';
import CelebTab from '../components/celesTabs';
import Footer from '../components/footer';
import './Celebs.css';

const Celebs = () => {
return (
    <div>
        <Header />
        <div className=" general">
            <div className="imageSlider">
                {/* image slider goes here */}
            </div>
            <div className="container">
                <CelebTab />
            </div>
        </div>
        <Footer />
    </div>
)
}

export default Celebs;