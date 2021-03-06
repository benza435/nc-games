import React, { useState, useEffect } from 'react';
import img404 from '../img/sad_dice.jpg'
import {Link} from 'react-router-dom'
import {getLatestReviews, atTimeOnDate} from '../utils/api'


const LatestReviews = (setLatestReviewsLoading) => {
    const [reviews, setReviews] = useState([])


    useEffect(()=>{
        getLatestReviews()
        .then((data)=>{
            setReviews(data)
            setLatestReviewsLoading(false)
        })
        .catch((err)=>{
            console.log(err)
    
        })
    },[setLatestReviewsLoading])



    return (
        <>
<h2>Latest reviews:</h2>
<div className="review-gallery-home">

{reviews.map((review) => {
    let gameImage = (review.review_img_url)? review.review_img_url: img404
    return (
        <div key={review.review_id} className="review-card-home">
            <div>
          
            <img src={gameImage} alt="game" className="review-card-img-home"/>
            </div>
            <div>
            <h4>{review.title}</h4> 
            <p>{atTimeOnDate(review.created_at)}</p>
            <Link to={`/reviews/id/${review.review_id}`}><button>Read Review</button>
            </Link>
            </div>
            </div>
)})}
</div>
        </>
    );
};

export default LatestReviews;










