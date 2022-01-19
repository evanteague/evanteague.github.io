import React from 'react';
import Layout from "../components/Layout";
import writings from '../data/writings';
import Cards from '../components/Cards';

function Writing() {
    return (
        <Layout>
            <Cards data={writings} />
        </Layout>
    )
}

export default Writing;