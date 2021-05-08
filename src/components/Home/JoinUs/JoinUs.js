import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import joinUsImage from '../../../images/joinUs.jpg';

const JoinUs = () => {

    const locationData = [
        {
            id: 1,
            location: 'San Francisco',
            status: 'No open positions'
        },{
            id: 2,
            location: 'San Francisco',
            status: 'No open positions'
        },{
            id: 3,
            location: 'San Francisco',
            status: 'No open positions'
        }
    ]
    
    return (
        <section>
            <div className="top-image">
                <img className="img-fluid" src={joinUsImage} alt="JoinUsBanner" />
            </div>
            <div className="joinUs-detail">
                <div className="py-5">
                    <h1>Join Us</h1>
                    <h2>Open positions</h2>
                </div>
                <div className="location row mb-5">
                    {
                        locationData.map(location => <div key={location.id} className="col-md-4">
                            <h4>{location.location} <FontAwesomeIcon icon={faMapMarkerAlt}/></h4>
                            <small>{location.status}</small>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default JoinUs;