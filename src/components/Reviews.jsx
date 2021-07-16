import {useState, useEffect} from 'react';
import {getReviews, getCategoryDescription} from '../utils/api';
import {useParams} from 'react-router-dom'
import ReviewCards from './ReviewCards'
import ReviewSortOptions from './ReviewSortOptions'
import Loading from '../components/Loading'

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
        console.log(params)
    })
    .catch((err)=>{
        console.log(err)

    })
},[params.category, sortBy, order])
let category = 0
if (params.category) {
   category = params.category
}else {
   category = "all"
}
//getCategoryDescription(params.category)




if (isLoading) return <Loading/>;
return (
    
    <div className="review-gallery-main">
        <h1>{category} reviews!</h1>
        <p>category description</p>      
        <ReviewSortOptions setSortBy={setSortBy} setOrderBy={setOrder}/>
        <ReviewCards reviews={reviews}/>
    </div>

    );
};

export default Reviews;