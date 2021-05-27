import React, { useState, useEffect } from 'react';
import img404 from '../img/sad_dice.jpg'
import {Link} from 'react-router-dom'
import {getTopReviews} from '../utils/api'


const TopReviews = () => {
    const [reviews, setReviews] = useState([])


    useEffect(()=>{
        getTopReviews().then((data)=>{
            setReviews(data)
        })
        .catch((err)=>{
            console.log(err)
    
        })
    },[])



    return (
        <>
<h2>Top reviews:</h2>
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
            <p>{review.votes} votes</p>
            <Link to={`/reviews/id/${review.review_id}`}><button>Read Review</button>
            </Link>
            </div>
            </div>
)})}
</div>






        </>
    );
};

export default TopReviews;










