import React from 'react';
import BannerImage from '../../../images/topBanner.jpg';


const TopBanner = () => {
    return (
    <section style={{backgroundColor: '#fafafa'}} className="py-5">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div data-aos="fade-right" className="col-md-5">
                        <h1 style={{ color: '#3A4256' }}>Ueno.</h1>
                        <h2 className="text-gray">A full service creative agency <br /> Impressive work for you</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore sit libero ad voluptatem nulla assumenda id est fugiat. Labore?</p>
                    </div>
                    <div data-aos="fade-left" className="col-md-7">
                        <img src={BannerImage} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopBanner;