import React from 'react';
import Footer from '../Footer/Footer';
import About from './About/About';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import ShowCase from './Showcase/ShowCase';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div style={{ overflow: 'hidden' }}>
            <Header></Header>
            <About></About>
            <Skills></Skills>
            <ShowCase></ShowCase>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;