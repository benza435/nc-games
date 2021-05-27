import {useState, useEffect} from 'react';
import {atTimeOnDate, getReviewById} from '../utils/api'
import {useParams} from 'react-router-dom'
import img404 from '../img/sad_dice.jpg'
import VoteButton from './VoteButton'
import defaultUser from '../img/avatardefault_92824.png'
import facebook from '../img/socials/facebook.png'
import reddit from '../img/socials/reddit.png'
import twitter from '../img/socials/twitter.png'
import whatsapp from '../img/socials/whatsapp.png'

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
        <div className="review-page">
            <div className="review-full">
                    <h1>{review.title}</h1> 
                    <img src={gameImage} alt="game" className="review-full-img"/>
                    <h3><img src={defaultUser} className="userIcon" alt=""/> by {review.owner}</h3>
                    {atTimeOnDate(review.created_at)}
                    <hr/>
                    <p className="review-body">{review.review_body}</p>
                    
                    <span>
                        <VoteButton votes={review.votes} id={review.review_id}/>
                        <img src={facebook} alt="facebook" className="share-icon"/> 
                        <img src={reddit} alt="reddit" className="share-icon"/> 
                        <img src={twitter} alt="twitter" className="share-icon"/> 
                        <img src={whatsapp} alt="whatsapp" className="share-icon"/> 
                    </span>
                    <hr/>
            </div>
        </div>
    );
};

export default ReviewById;