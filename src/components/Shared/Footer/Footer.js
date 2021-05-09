import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
        <footer className="footer-area">
            <div className="container">
                <div className="row py-5">
                    <div className="title col-md-6">
                        <h1>Got a project?</h1>
                        <h2 className="text-gray">Let’s talk</h2>
                        <ul className="list-unstyled mt-4">
                            <li><Link to="/" className="text-secondary text-decoration-none"><FontAwesomeIcon icon={faChevronRight} /> Tell us everything</Link></li>
                        </ul>
                    </div>

                    <div className="row title col-md-6">
                        <FooterCol key={1} menuItems={explore} />
                        <FooterCol key={2} menuItems={ourAddress} />
                        <FooterCol key={3} menuItems={others} />
                    </div>

                </div>

                <hr />

                <div className="d-md-flex py-5 justify-content-between">
                    <Link className="navbar-brand brand-logo d-none d-md-block" to="/">Ueno.</Link>
                    <div className="d-flex justify-content-center">

                        <a className="social-link d-none d-md-block" href="/">Privacy</a>
                        <a className="social-link" href="/"><FontAwesomeIcon icon={faDribbble} /></a>
                        <a className="social-link" href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a className="social-link" href="/"><FontAwesomeIcon icon={faGithub} /></a>
                        <a className="social-link" href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a className="social-link" href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a className="social-link" href="/"><FontAwesomeIcon icon={faLinkedinIn} /></a>

                    </div>
                </div>


                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;