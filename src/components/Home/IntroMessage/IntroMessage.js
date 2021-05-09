import React from 'react';
import './IntroMessage.css'

const IntroMessage = () => {
    return (
        <section className="IntroMessage">
            <div className="container">
                <div className="message">
                    <h1 className="text-gray">Ueno is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.</h1>
                    <div className="btn-box">
                        <button className="btn">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroMessage;