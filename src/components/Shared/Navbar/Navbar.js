import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const { pathname } = useLocation();
    let mainPath = pathname.split('/')[1];

    if (!mainPath) {
        mainPath = 'home'
    }

    return (
        <header style={{ backgroundColor: '#fafafa' }}>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand brand-logo" to="/">Ueno.</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="ms-auto navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item ms-5">
                                    <Link className={mainPath === 'home' ? 'active nav-link' : 'nav-link'} to="/">Home</Link>
                                </li>
                                <li className="nav-item ms-5">
                                    <Link className={mainPath === 'about' ? 'active nav-link' : 'nav-link'} to="/about">About</Link>
                                </li>
                                <li className="nav-item ms-5">
                                    <Link className={mainPath === 'service' ? 'active nav-link' : 'nav-link'} to="/service">Service</Link>
                                </li>
                                <li className="nav-item ms-5">
                                    <Link className={mainPath === 'blog' ? 'active nav-link' : 'nav-link'} to="/blog">Blog</Link>
                                </li>
                                <li className="nav-item ms-5">
                                    <Link className={mainPath === 'contact' ? 'active nav-link' : 'nav-link'} to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;