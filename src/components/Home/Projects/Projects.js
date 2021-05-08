import React from 'react';
import project1 from '../../../images/projects/project1.jpg';
import project2 from '../../../images/projects/project2.jpg';
import project3 from '../../../images/projects/project3.jpg';
import project4 from '../../../images/projects/project4.jpg';

const Projects = () => {

    const projectsData = [
        {
            id: 1,
            title: 'Mask Design',
            description: 'Lorem, ipsum dolor.',
            bannerImg: project1
        }, {
            id: 2,
            title: 'Mask Design',
            description: 'Lorem, ipsum dolor.',
            bannerImg: project2
        }, {
            id: 3,
            title: 'Mask Design',
            description: 'Lorem, ipsum dolor.',
            bannerImg: project3
        }, {
            id: 4,
            title: 'Mask Design',
            description: 'Lorem, ipsum dolor.',
            bannerImg: project4
        }
    ]

    return (
        <section className="py-5">
            <div data-aos="flip-up" className="title text-center py-5">
                <h1>All work, all play<br />Selected projects</h1>
            </div>
            <div className="projects-container row overflow-hidden">
                {
                    projectsData.map(project =>
                        <div data-aos="fade-up" key={project.id} className="col-md-6 mb-5">
                            <img className="img-fluid w-100" src={project.bannerImg} alt="" />
                            <div className="my-4 text-center">
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                            </div>
                        </div>)
                }
            </div>
        </section>
    );
};

export default Projects;