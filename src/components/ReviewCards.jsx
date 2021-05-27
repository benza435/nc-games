import React from 'react';
import img404 from '../img/sad_dice.jpg'
import {atTimeOnDate} from '../utils/api'
import {Link} from 'react-router-dom'
import defaultUser from '../img/avatardefault_92824.png'


const ReviewCards = ({reviews}) => {
    return (

<>
{reviews.map((review) => {
    let gameImage = (review.review_img_url)? review.review_img_url: img404
    return (
            <Link to={`/reviews/id/${review.review_id}`} key={review.review_id}>
        <div  className="review-card-main">
            <div>
            <img src={gameImage} alt="game" className="review-card-img-main"/>
            </div>
            <div className="review-card-main-details">
            <h2>{review.title}</h2> 
            <h3>by {review.owner} <img src={defaultUser} className="userIcon"/></h3>
            <h4>{atTimeOnDate(review.created_at)}</h4>
            <p>{review.votes} votes, {review.comment_count} comments</p>
            
            </div>
        </div>
            </Link>
)})}
</>



    )};

export default ReviewCards;


