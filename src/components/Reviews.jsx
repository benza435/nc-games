import {useState, useEffect} from 'react';
import {atTimeOnDate, getReviews, getReviewById} from '../utils/api';
import {Link, useParams} from 'react-router-dom'
import img404 from '../img/sad_dice.jpg'

const Reviews = () => {
const [reviews, setReviews] = useState([])
const [isLoading, setIsLoading]  = useState(true)
const params = useParams()

useEffect(()=>{
    getReviews(params.category).then((data)=>{
        setReviews(data)
        setIsLoading(false)
    })
    .catch((err)=>{
        console.log(err)
    })
},[params.category])

if (isLoading) return <p>LOADING!!!</p>;
return (
    
    <div className="app-reviews">
        <h1>selected reviews:</h1>
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
                    <Link to={`/reviews/id/${review.review_id}`}><button onClick={getReviewById(review.review_id)}>Read Review</button>
                    </Link>
                    </div>
                </div>


                    )
                    
                })}
        

        </div>
 
    
    );
};

export default Reviews;







/*

                     */