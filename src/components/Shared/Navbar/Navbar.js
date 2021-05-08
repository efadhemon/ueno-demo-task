import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Ueno.</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="ms-auto navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item ms-5">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item ms-5">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item ms-5">
                                <Link className="nav-link" to="/">Service</Link>
                            </li>
                            <li className="nav-item ms-5">
                                <Link className="nav-link" to="/">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;