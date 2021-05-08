import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import BlogAndNews from '../BlogAndNews/BlogAndNews';
import JoinUs from '../JoinUs/JoinUs';
import Projects from '../Projects/Projects';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <main className="container">
            <TopBanner/>
            <Projects/>
            <BlogAndNews/>
            <JoinUs/>
            <Footer/>
        </main>
    );
};

export default Home;