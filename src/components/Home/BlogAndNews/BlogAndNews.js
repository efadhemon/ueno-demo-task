import React from 'react';
import './BlogAndNews.css';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BlogAndNews = () => {

    const newsBlogData = [
        {
            id: 1,
            dateAndType: '6 jan. Blog',
            title: 'Lorem ipsum dolor sit',
            link: '/'
        }, {
            id: 2,
            dateAndType: '6 jan. Blog',
            title: 'Lorem ipsum dolor sit',
            link: '/'
        }, {
            id: 3,
            dateAndType: '6 jan. Blog',
            title: 'Lorem ipsum dolor sit',
            link: '/'
        }
    ]

    return (
        <section className="py-5 BlogAndNews">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>What's New?</h2>
                        <h3 className="text-gray">Our Blogs And News</h3>
                    </div>
                    <div className="col-md-8">
                        {
                            newsBlogData.map(data => <a href={data.link}  key={data.id} data-aos="fade-left" className="d-flex justify-content-between align-items-center blog-news">
                                <span>{data.dateAndType}</span>
                                <h1>{data.title}</h1>
                                <a href={data.link} className="text-decoration-none d-none d-md-block" ><FontAwesomeIcon icon={faArrowAltCircleRight} /> learn more</a>
                            </a>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogAndNews;