import React, {useState} from 'react';



const VoteButton = (props) => {

const [reviewVotes, setReviewVotes] = useState(0);
// button update state by 1, send patch request to api


    return (
        <div>
            <p>{props.votes + reviewVotes} votes</p>
            <button 
            onClick={() =>
            setReviewVotes((votes) => {
                return votes + 1;
                })
            }
            
            
            >vote</button>
        </div>
    );
};

export default VoteButton;