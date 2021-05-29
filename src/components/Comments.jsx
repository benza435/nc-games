import React from 'react';
import {useState, useEffect} from 'react';
import {getComments} from '../utils/api'
import {useParams} from 'react-router-dom'
import SubmitComment from './SubmitComment'

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


if (isLoading) return <p>LOADING!!!</p>;
    return (
        <div>
 <SubmitComment setComments={setComments} user={"jessjelly"} id={params.review_id}/>
        {/* <SubmitComment setComments={setComments} user={"tickle122"} id={params.review_id}/> */}
        <ul>
            {comments.map((comment)=>{
                return(
                <div key={comment.comment_id} className="comment-card">
                    <h2>{comment.author}</h2>
                    <p>{comment.body}</p>
                    </div>
            )})}
        </ul>
        </div>
    );
};

export default Comments;