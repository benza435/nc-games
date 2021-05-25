import React,{useState,useEffect} from 'react';
import {getReviews} from '../utils/api'

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

}
const CatStrategies = () => {
    return 
};

export default CatStrategies;