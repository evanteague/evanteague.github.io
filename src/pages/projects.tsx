import React from 'react';
import Layout from "../components/Layout";
import projects from '../data/projects';
import Cards from '../components/Cards';

function Projects() {
    return (
        <Layout>
            <Cards data={projects} />
        </Layout>
    )
}

export default Projects;