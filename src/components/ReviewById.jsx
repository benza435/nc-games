import {useState, useEffect} from 'react';
import {atTimeOnDate, getReviewById} from '../utils/api'
import {useParams} from 'react-router-dom'
import img404 from '../img/sad_dice.jpg'
import VoteButton from './VoteButton'

const ReviewById = () => {
const [review, setReview] = useState([])
const [isLoading, setIsLoading]  = useState(true)
const params = useParams()

useEffect(()=>{
    getReviewById(params.review_id).then((data)=>{
        setReview(data)
        setIsLoading(false)
    })
    .catch((err)=>{
        console.log(err)

    })
},[params.review_id])



if (isLoading) return <p>LOADING!!!</p>;
let gameImage = (review.review_img_url)? review.review_img_url: img404
    return (
        <div className="app-reviews">
            <div key="" className="review-card-big">
           
                       <img src={gameImage} alt="game" className="review-card-img-big"/>
          
                    <h2>{review.title}</h2> 
                    <h3>by {review.owner}</h3>
                    <h4>{atTimeOnDate(review.created_at)}</h4>
                    <p>{review.review_body}</p>
                    <VoteButton votes={review.votes} id={review.review_id}/>
             



            </div>
            
        </div>
    );
};

export default ReviewById;

