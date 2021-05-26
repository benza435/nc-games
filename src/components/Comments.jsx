import React from 'react';
import {useState, useEffect} from 'react';
import {atTimeOnDate, getComments} from '../utils/api'
import {Link, useParams} from 'react-router-dom'

const Comments = () => {
const [comments,setComments] = useState([])
const [isLoading, setIsLoading]  = useState(true)
const params = useParams()

useEffect(()=>{
    getComments(params.review_id).then((data)=>{
        setComments(data)
        setIsLoading(false)
    })
    .catch((err)=>{
        console.log(err)
    })
},[params.review_id])

    return (
        
        <ul>
            <h2>comments</h2>
            {comments.map((comment)=>{
                return(
                <div className="comment-card">
                    <h2>{comment.author}</h2>
                    <p>{comment.body}</p>
                    </div>
            )})}
        </ul>
      
    );
};

export default Comments;