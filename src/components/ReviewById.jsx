import {useState, useEffect} from 'react';
import {atTimeOnDate, getReviewById} from '../utils/api'
import {Link, useParams} from 'react-router-dom'


//get review by id function 
// state for current review?
//  get review id from params 
//  state for vote count/setvote, add a vote button
// link owner to owners profile page
//  loading placeholders


const ReviewById = () => {

const [review, setReview] = useState([])
const params = useParams()




    return (
        <div className="app-reviews">
            <div key="" className="review-card-big">
            <h1>One single review:</h1>
            <img src={review.review_img_url} alt="game" className="review-card-img-big"/>
           
                    <h2>{review.title}</h2> 
                    <h3>by {review.owner}</h3>
                    {/* <h4>{atTimeOnDate(review.created_at)}</h4> */}
                    <p>{review.review_body}</p>
                    <span>{review.votes} votes</span>
                    <button>Upvote :)</button>
                    <button>Downvote :(</button>



            </div>
            
        </div>
    );
};

export default ReviewById;

