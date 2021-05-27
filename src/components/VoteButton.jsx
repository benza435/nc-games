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
    return (
        <div>

            <p>
            <button 
            onClick={() => addVote()}>vote</button>
            {props.votes + reviewVotes} votes
            </p>
        </div>
    );
};

export default VoteButton;