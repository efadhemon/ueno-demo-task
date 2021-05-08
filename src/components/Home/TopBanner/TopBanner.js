import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../../../images/topBanner.jpg';


const TopBanner = () => {
    return (
        <section className="my-5">
            <div className="row d-flex align-items-center">
                <div data-aos="fade-right" className="col-md-5">
                    <h1 style={{ color: '#3A4256' }}>Your New Smile <br /> Starts Here</h1>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, porro! Quas vero molestias cupiditate officiis sit asperiores accusantium, doloremque alias.</p>
                    <Link to='/appointment' className="btn btn-brand">GET APPOINTMENT</Link>
                </div>
                <div data-aos="fade-left" className="col-md-7">
                    <img src={BannerImage} alt="" className="img-fluid" />
                </div>
            </div>
        </section>
    );
};

export default TopBanner;