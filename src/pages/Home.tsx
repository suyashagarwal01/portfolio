import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to My Design Portfolio</h1>
                <section>
                    <h2>Projects</h2>
                    <ProjectCard title="Project 1" description="Description of project 1" />
                    <ProjectCard title="Project 2" description="Description of project 2" />
                    <ProjectCard title="Project 3" description="Description of project 3" />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;