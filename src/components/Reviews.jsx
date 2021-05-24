import {useState, useEffect} from 'react';



const Reviews = () => {
    const [reviews, setReviews] = useState([])
useEffect(()=>{
    console.log("something else")
    setReviews([])},[])

    return (
        <div className="app-reviews">
     
        </div>
    
    );
};

export default Reviews;