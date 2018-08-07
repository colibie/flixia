import React from 'react';
import '../general_style.css'
import Header from '../components/header'
import Footer from '../components/footer';
import Cards from '../components/card';
import "./FAQ.css"


const FAQ = () => {
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
            <Cards 
                data={[
                    {
                        key: new Date(),
                        aUrl: '../components/end.jpg',
                        title: 'the big bad wolf',
                        descr: "the wolf was very bad"
                    },
                    {
                        key: new Date(),
                        aUrl: '../components/end.jpg',
                        title: 'the big bad wolf',
                        descr: "the wolf was very bad"
                    },
                    {
                        key: new Date(),
                        aUrl: '../components/end.jpg',
                        title: 'the big bad wolf',
                        descr: "the wolf was very bad"
                    },
                    {
                        key: new Date(),
                        aUrl: '../components/end.jpg',
                        title: 'the big bad wolf',
                        descr: "the wolf was very bad"
                    },                    
                    {
                        key: new Date(),
                        aUrl: '../components/end.jpg',
                        title: 'the big bad wolf',
                        descr: "the wolf was very bad"
                    },
                ]}
            />
        </div>
        <Footer />
    </div>
)
}

// export default '../components/end.jpg';
export default FAQ;