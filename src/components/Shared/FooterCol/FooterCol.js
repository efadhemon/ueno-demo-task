import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div className="col-md-2">            
            <ul className="list-unstyled">
                 {
                     props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="text-secondary">{item.name}</Link></li>)
                 }
            </ul>
        </div>
    );
};

export default FooterCol;