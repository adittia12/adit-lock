import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const educations = [
    {
        years: '2010 - 2013',
        title: 'SMAN 2 Telukjambe Timur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        years: '2013 - 2017',
        title: 'University Kibi Internasional',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        years: '2017 - 2019',
        title: 'University New York',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
];

const experiences = [
    {
        years: '2017 - 2019',
        title: 'Shoppee',
        position: 'Web Develover',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        years: '2019 - Present',
        title: 'Gojek',
        position: 'Android Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
];

const AboutPage = () => {
    return (
        <>
        
            <Navbar />
            
            <section className="about-section-header">
                <div className="about-section-left">
                <div className="bg-avatar-about">
                    <img className="img-avatar-about" src="/images/avatar-about.png" alt="Avatar about" />
                </div>
                </div>
                <div className="about-section-right">
                <div>
                    <h1 className="title-name">Hi I’M Adittia A</h1>
                    <div className="title-position">I am Web Designer</div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                </div>
                </div>
            </section>

            <section className="about-section-second">
                <h2 className="sub-title-about">Education</h2>
                {
                    educations.map((education, key) => (
                        <div key={key}>
                            <div className="text-years">{education.years}</div>
                            <div className="text-title">{ education.title }</div>
                            <p className="title-description">{ education.description }</p>
                        </div>
                    ))
                }
            </section>

            <section className="about-section-third">
                <h2 className="sub-title-about">Experience</h2>
                {
                    experiences.map((experience, key) => (
                        <div key={key}>
                            <div className="text-years">{experience.years}</div>
                            <div className="text-title">{ experience.title }</div>
                            <div className="text-position">{ experience.position }</div>
                            <p className="title-description">{ experience.description }</p>
                        </div>
                    ))
                }
            </section>

            <Footer />
        
        </>
    )
}


export default AboutPage;