import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <Books></Books>
            </div>
            <h1>This is Home</h1>
        </div>
    );
};

export default Home;