import {useState, useEffect} from 'react';
import {getReviews} from '../utils/api';
import {useParams} from 'react-router-dom'

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


            {reviews.map((review) => {
                return (
<div key={review.review_id} className="review-card">
                        <img src={review.review_img_url} alt="game" className="review-card-img-small"/>
                        {review.title}
                    </div>


                    )
                    
                })}
        

        </div>
 
    
    );
};

export default Reviews;







/*

                     */