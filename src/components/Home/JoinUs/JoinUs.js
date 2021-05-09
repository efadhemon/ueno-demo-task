
import React from 'react';
import './JoinUs.css'
import joinUsImage from '../../../images/joinUs.jpg';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const JoinUs = () => {

    const locationData = [
        {
            id: 1,
            location: 'San Francisco',
            status: 'No open positions'
        }, {
            id: 2,
            location: 'San Francisco',
            status: 'No open positions'
        }, {
            id: 3,
            location: 'San Francisco',
            status: 'No open positions'
        }
    ]

    return (
        <section>
            <div className="container">
                <div data-aos="zoom-in" className="top-image">
                    <img className="img-fluid" src={joinUsImage} alt="JoinUsBanner" />
                </div>
                <div className="joinUs-detail py-5">
                    <div className="py-5 joinUs-title">
                        <h1>Join Us</h1>
                        <h2 className="text-gray">Open positions</h2>
                    </div>
                    <div className="location offset-md-3 row mb-5">
                        {
                            locationData.map(location => <div key={location.id} data-aos="flip-up" className="col-md-4 location-detail">
                                <h4>{location.location} <FontAwesomeIcon icon={faMapMarkerAlt} /></h4>
                                <small>{location.status}</small>
                            </div>)
                        }
                    </div>
                </div>
                <hr />
            </div>
        </section>
    );
};

export default JoinUs;