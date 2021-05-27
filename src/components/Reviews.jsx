import {useState, useEffect} from 'react';
import {atTimeOnDate, getReviews, getReviewById} from '../utils/api';
import {Link, useParams} from 'react-router-dom'
import img404 from '../img/sad_dice.jpg'
import ReviewCards from './ReviewCards'
import ReviewSortOptions from './ReviewSortOptions'

const Reviews = () => {
const [reviews, setReviews] = useState([])
const [isLoading, setIsLoading]  = useState(true)
const [sortBy, setSortBy] = useState('created_at')
const [order, setOrder] = useState('asc')
const params = useParams()

useEffect(()=>{
    getReviews(params.category, sortBy, order).then((data)=>{
        setReviews(data)
        setIsLoading(false)
    })
    .catch((err)=>{
        console.log(err)
    })
},[params.category, sortBy, order])

if (isLoading) return <p>LOADING!!!</p>;
return (
    
    <div className="app-reviews">
        <h1>selected reviews:</h1>      
        <ReviewSortOptions setSortBy={setSortBy} setOrderBy={setOrder}/>
        <ReviewCards reviews={reviews}/>
    </div>

    );
};

export default Reviews;







/*
{reviews.map((review) => {
            let gameImage = (review.review_img_url)? review.review_img_url: img404
            return (
    <div key={review.review_id} className="review-card">
        <div>
                  
            <img src={gameImage} alt="game" className="review-card-img-small"/>
            </div><div>
                <h2>{review.title}</h2> 
                <h3>by {review.owner}</h3>
                <h4>{atTimeOnDate(review.created_at)}</h4>
                <p>{review.votes} votes, {commentCount} comments</p>
            <Link to={`/reviews/id/${review.review_id}`}><button>Read Review</button>
            </Link>
        </div>
    </div>


   )
                    
})}
        

                     */