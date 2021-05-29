import React from 'react';
import TopReviews from './TopReviews'
import LatestReviews from './LatestReviews'
import {useState} from 'react'
import Loading from '../components/Loading'

const Home = () => {

const [topReviewsLoading, setTopReviewsLoading]  = useState(true)
const [latestReviewsLoading, setLatestReviewsLoading] = useState(true)
    if (topReviewsLoading && latestReviewsLoading) return <Loading/>;
    return (
        <div>
            <TopReviews topReviewsLoading={topReviewsLoading} setTopReviewsLoading={setTopReviewsLoading}/>
            <LatestReviews latestReviewsLoading={latestReviewsLoading} setLatestReviewsLoading={setLatestReviewsLoading}/>
            <h2>ads:</h2>
        </div>
    );
};

export default Home;