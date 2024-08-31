
import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Presentation from '../components/Presentation';

const About = () => {

    return (
        <div className="main-content">
            <Logo />
            <Navigation />
            <Presentation />
            <Footer />
            
        </div>
    );
};

export default About;