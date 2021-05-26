import React, {useState} from 'react';
import {patchVotes} from '../utils/api'



const VoteButton = (props) => {

    const addVote = () =>{
        setReviewVotes((votes) => {
            return votes + 1;
            })
            console.log(props.id)
        patchVotes(props.id)

    } 
const [reviewVotes, setReviewVotes] = useState(0);
// button update state by 1, send patch request to api


    return (
        <div>
            <p>{props.votes + reviewVotes} votes</p>

            <button 
            onClick={() => addVote()}>vote</button>
        </div>
    );
};

export default VoteButton;