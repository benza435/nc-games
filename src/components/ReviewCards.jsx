import React from 'react';
import img404 from '../img/sad_dice.jpg'
import {atTimeOnDate} from '../utils/api'
import {Link} from 'react-router-dom'


const ReviewCards = ({reviews}) => {
    return (

<>
{reviews.map((review) => {
    let gameImage = (review.review_img_url)? review.review_img_url: img404
    return (
        <div key={review.review_id} className="review-card">
            <div>
          
            <img src={gameImage} alt="game" className="review-card-img-small"/>
            </div>
            <div>
            <h2>{review.title}</h2> 
            <h3>by {review.owner}</h3>
            <h4>{atTimeOnDate(review.created_at)}</h4>
            <p>{review.votes} votes, {review.comment_count} comments</p>
            <Link to={`/reviews/id/${review.review_id}`}><button>Read Review</button>
            </Link>
            </div>
        </div>
)})}
</>



    )};

export default ReviewCards;


