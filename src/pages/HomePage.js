import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const steps = [
    { image: '/images/steps/design.png', title: 'Design your web'},
    { image: '/images/steps/develop.png', title: 'Develop your web'},
    { image: '/images/steps/product.png', title: 'Enjoy your web'},
  ];


const tools = ['figma', 'ai', 'vscode', 'react', 'vue', 'bootstrap'];

const HomePage = () => {
    return (
        <>
        
            <Navbar />
            <section className="home-section-header">
                <div className="home-section-header-left">
                    <div>
                        <h1 className="title-name">Hi I'M JONS LUCK</h1>
                        <div className="title-position">I am Front End Develover</div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                    </div>
                </div>

                <div className="home-section-header-right">
                    <img className="avatar-banner" src="/images/avatar-banner.png" alt="avatar"  />
                </div>
                
            </section>
            
            <section className="home-section-second">
                <h2 className="home-sub-title">What i do</h2>
                <div className="wrapper-steps">
                {
                    steps.map((step, key) => (
                    <div className="item-step" key={key}>
                        <div className="bg-img-step">
                        <img className="img-step" src={step.image} alt={step.title} />
                        </div>
                        <div className="item-step-title">{step.title}</div>
                    </div>
                    ))
                }
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </section>

            <section className="home-section-third">

                <h2 className="home-sub-title">Portfolio</h2>
                <div className="wrapper-covers">
                    {
                        [...Array(6)].map((_, key) => (
                            <img className="img-cover" src={`/images/portfolio/cover-${key + 1}.png`} alt={`cover-${key+1}`} key={key}
                            />
                        ))
                    }
                </div>

            </section>

            <section className="home-section-fourth">
                <h2 className="home-sub-title">My Tools</h2>
                <div className="wrapper-tools">
                {
                    tools.map((tool, key) => (
                    <img className="img-tool" src={`/images/tools/${tool}.png`} alt={tool} key={key} />
                    ))
                }
                </div>
            </section>
            <Footer />
        
        </>
    )
}


export default HomePage;