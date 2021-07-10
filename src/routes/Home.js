import React from 'react';
import { Link } from 'react-router-dom'
import './route-styles/Home.css';

function Home() {
    return (
        <div className='home'>
            <div className='top-blue'></div>
            <div className='stripe-container'>
                <div className='vert-red'></div>
                <div className='vert-white'></div>
                <div className='vert-blue'></div>
            </div>
            <header className='home-header'>
                <img src={require('../images/mike-photo.jpg').default} alt='photo of Michael Cassat' className='home-img' />
                <div className='intro'>
                    <h1>From Wyoming, For Wyomans</h1>
                    <p>As a Wyoming Native, Michael has earned esteem locally and regionally as a passionate and dedicated real estate pro. His market knowledge from his time as a Cheyenne resident allows him to provide his clients with the most current recommendations for locality and economics. He has worked hard to grow and maintain his relationships professionally. He holds extensive knowledge in rental prop investments, single family homes and commercial properties. </p>
                    <div className='red-border'><div className='white-border'><button className='hello-button'>Say Hello</button></div></div>
                </div>
            </header>
            <section className='home-main'>
                <h2>Welcome To Cheyenne. We're So Glad To Have You.</h2>
                <iframe src='http://cheyenne.paragonrels.com/idx/idx.aspx?Mls=CLSC&Subscriber=f50e4a7e-2554-4bc0-a673-48ba03fd58dd' className='listings-box' title="Cheyenne Wyoming real estate listings" />
                <div className='button-box'>
                    <div className='red-border call'><div className='white-border'><button className='call-button'>Schedule Call</button></div></div>
                    <div className='red-border call'><div className='white-border'><button className='call-button'>Schedule Consultation</button></div></div>
                </div>
                <img src='https://cdn.britannica.com/38/5238-004-C070D1F2/flag-citizen-Wyoming-response-contest-field-border-1917.jpg' alt='the wyoming state flag. a white buffalo on a navy background with a red border' className='flag-img' />
            </section>
            <div className='footer-nav'>
                <Link to='/about' className='footer-about'><div className='footer-link'><b>About Cheyenne</b></div></Link>
                <div className='red home'></div>
                <div className='white home'></div>
                <div className='blue home'></div>
                <Link to='/testimonials' className='footer-testimonials'><div className='footer-link black'><b>Testimonials</b></div></Link>
                <div className='red home'></div>
                <div className='white home'></div>
                <div className='blue home'></div>
                <Link to='/calculator' className='footer-calculator'><div className='footer-link'><b>Mortgage Calculator</b></div></Link>
            </div>
            <div className='bottom-red'></div>
            <div className='bottom-white'></div>
            <div className='bottom-blue'></div>
        </div>
    )
}

export default Home;