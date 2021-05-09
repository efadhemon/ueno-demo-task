import React from 'react';
import BlogAndNews from '../BlogAndNews/BlogAndNews';
import IntroMessage from '../IntroMessage/IntroMessage';
import JoinUs from '../JoinUs/JoinUs';
import Projects from '../Projects/Projects';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <main className="overflow-hidden">
            <TopBanner />
            <IntroMessage />
            <Projects />
            <BlogAndNews />
            <JoinUs />
        </main>
    );
};

export default Home;