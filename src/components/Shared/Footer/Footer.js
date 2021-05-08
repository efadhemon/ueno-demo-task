import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const explore = [
        { name: "Clients", link: "/" },
        { name: "About", link: "/checkup" },
        { name: "News", link: "/" },
        { name: "Contact", link: "/" },
        { name: "Careers", link: "/" },
        { name: "Press", link: "/" }
    ]

    const ourAddress = [
        { name: "San Francisco", link: "/" },
        { name: "New York", link: "/" },
        { name: "Los Angeles", link: "/" },
        { name: "ReyKjavik", link: "/" }

    ]

    const others = [
        { name: "Newsletter", link: "/" },
        { name: "Blog", link: "/" },
        { name: "Bueno.co", link: "/" },
        { name: "Ueno.design", link: "/" },
        { name: "Ueno.store", link: "/" },
        { name: "Ueno.events", link: "/" },
        { name: "Ueno.land", link: "/" },
        { name: "Playground", link: "/" },
        { name: "The Interview", link: "/" }
    ]

    return (
        <footer className="footer-area clear-both">
            <div className="row py-5">
                <div className="title col-md-6">
                    <h1>Got a project?</h1>
                    <h2>Let’s talk</h2>
                    <ul className="list-unstyled mt-4">
                        <li><Link to="/" className="text-secondary">Tell us everything</Link></li>
                    </ul>
                </div>
                <FooterCol key={1} menuItems={explore} />
                <FooterCol key={2} menuItems={ourAddress} />
                <FooterCol key={3} menuItems={others} />

            </div>

            <hr />

            <div className="navbar navbar-expand-lg navbar-light my-5">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Ueno.</Link>
                    <div className="navbar-collapse">
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link ms-5" href="/">Privacy</a>
                            <a className="nav-link ms-5" href="/"><FontAwesomeIcon icon={faDribbble} /></a>
                            <a className="nav-link ms-5" href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a className="nav-link ms-5" href="/"><FontAwesomeIcon icon={faGithub} /></a>
                            <a className="nav-link ms-5" href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a className="nav-link ms-5" href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a className="nav-link ms-5" href="/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="copyRight text-center">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </footer>

    );
};

export default Footer;