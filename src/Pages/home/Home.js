import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import './home.css';
import '../general_style.css'
import MovieTab from '../components/movTab.js'
import LoginModal from '../components/loginModal'


const Home = () => {
    return (
        <div>
            {/* <div className="header"> */}
            {/* //header goes here */}
                <Header />
            {/* </div> */}
            <div className="jumbotron general">
                 {/* the slider goes here */}
                
            </div>
            <MovieTab />
            {/* movie cards grid comes here */}
            <hr />
            {/* page footer goes here */}
                <Footer /> 
        </div>
    )
}


export default Home;