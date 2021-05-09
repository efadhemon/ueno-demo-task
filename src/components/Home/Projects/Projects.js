import React from 'react';
import './Projects.css'
import project1 from '../../../images/projects/project1.jpg';
import project2 from '../../../images/projects/project2.jpg';
import project3 from '../../../images/projects/project3.jpg';
import project4 from '../../../images/projects/project4.jpg';
import project5 from '../../../images/projects/project5.jpg';
import project6 from '../../../images/projects/project6.jpg';

const Projects = () => {

    const projectsData = [
        {
            id: 1,
            title: 'Demo Project',
            description: 'Lorem, ipsum dolor.',
            bannerImg: project1,
            aos: 'zoom-in'
        }, {
            id: 2,
            title: 'Demo Project',
            description: 'Lorem, ipsum dolor.',
            bannerImg: project2,
            aos: 'zoom-in'
        }, {
            id: 3,
            title: 'Demo Project',
            description: 'Lorem, ipsum dolor.',
            bannerImg: project3,
            aos: 'fade-right'
        }, {
            id: 4,
            title: 'Demo Project',
            description: 'Lorem, ipsum dolor.',
            bannerImg: project4,
            aos: 'fade-left'
        }, {
            id: 5,
            title: 'Demo Project',
            description: 'Lorem, ipsum dolor.',
            bannerImg: project5,
            aos: 'zoom-in-right'
        }, {
            id: 6,
            title: 'Demo Project',
            description: 'Lorem, ipsum dolor.',
            bannerImg: project6,
            aos: 'zoom-in-left'
        }
    ]

    return (
        <section className="py-5 projects">
            <div className="container">
                <div data-aos="flip-up" className="project-title py-5">
                    <h1 className="text-gray">All work, all play<br />Selected projects</h1>
                </div>
                <div className="projects-container">
                    {
                        projectsData.map(project =>
                            <div className="project-box" data-aos={project.aos} key={project.id}>
                                <div className="project-image">
                                    <img className="img-fluid w-100" src={project.bannerImg} alt="" />
                                </div>
                                <div className="my-4 text-center">
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;