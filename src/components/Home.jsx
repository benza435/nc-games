import React from 'react';
import TopReviews from './TopReviews'
import LatestReviews from './LatestReviews'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <TopReviews/>
            <LatestReviews/>
            <h2>fake adverts for fun and satire</h2>
        </div>
    );
};

export default Home;