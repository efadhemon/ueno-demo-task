import React from 'react';
import './BlogAndNews.css';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BlogAndNews = () => {

    const newsBlogData = [
        {
            id: 1,
            dateAndType: '6 jan. Blog',
            title: 'Lorem ipsum dolor sit amet',
            link: '/'
        },{
            id: 2,
            dateAndType: '6 jan. Blog',
            title: 'Lorem ipsum dolor sit amet',
            link: '/'
        },{
            id: 3,
            dateAndType: '6 jan. Blog',
            title: 'Lorem ipsum dolor sit amet',
            link: '/'
        }
    ]
    
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-md-4">
                    <h2>What's New?</h2>
                    <h3>Our Blogs And News</h3>
                </div>
                <div className="col-md-8">
                    {
                        newsBlogData.map(data => <div key={data.id} className="d-flex justify-content-between align-items-center blog-news">
                            <span>{data.dateAndType}</span>
                            <h1>{data.title}</h1>
                            <a href={data.link} className="text-decoration-none" ><FontAwesomeIcon icon={faArrowAltCircleRight}/> learn more</a>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BlogAndNews;