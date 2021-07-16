import React, { useEffect } from 'react';
import TopReviews from './TopReviews'
import LatestReviews from './LatestReviews'
import {useState} from 'react'
import Loading from '../components/Loading'

import {getTopReviews} from '../utils/api'

const Home = () => {

const [topReviewsLoading, setTopReviewsLoading]  = useState(true)
const [latestReviewsLoading, setLatestReviewsLoading] = useState(true)
const [topReviews, setTopReviews] = useState([])

        


useEffect(()=>{
        getTopReviews()
        .then((data)=>{
            setTopReviews(data)
            setTopReviewsLoading(false)
            console.log("hello from topreviews")
        })
        .catch((err)=>{
            console.log(err)
    
        })
        // getLatestReviews()
        // .then((data))
    },[setTopReviewsLoading])

    
    // if (topReviewsLoading && latestReviewsLoading){
    //     console.log(topReviewsLoading)
    //     console.log(latestReviewsLoading)
    //     return <Loading/>
    // } 


    return (
        <div>
            <TopReviews topReviews={topReviews}/>
            <LatestReviews latestReviewsLoading={latestReviewsLoading} setLatestReviewsLoading={setLatestReviewsLoading}/>
            <h2>ads:</h2>
        </div>
    );
};

export default Home;