import {useState, useEffect} from 'react';
import {getReviews} from '../utils/api';

const Reviews = () => {
const [reviews, setReviews] = useState([])
const [isLoading, setIsLoading]  = useState(true)

useEffect(()=>{
    getReviews().then((data)=>{
        setReviews(data)
    })
    .then(()=>{setIsLoading(false)})
    .catch((err)=>{
        console.log(err)
    })
},[isLoading])

if (isLoading) return <p>LOADING!!!</p>;
    return (
      
        <div className="app-reviews">
            <ul>
            {reviews.map((review) => {
                return <li key={review.review_id}>
                    <div className="review-card-gallery">
                        </div>{review.title}
                </li>
            })}
            </ul>
        </div>
 
    
    );
};

export default Reviews;