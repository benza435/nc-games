import React, {useState} from 'react';
import {postComment} from '../utils/api'


const SubmitComment = (props) => {
    const [newComment, setNewComment] = useState("");
    
    // useEffect when the comment is submitted, update state
    //  then rerender comments with the new one at the top?
    
    return (
        <div>
            <h1>Post a comment:</h1>
            <form
        onSubmit={(event) => {
          event.preventDefault();
          postComment(props.id, props.user,newComment)
          .then((postedComment)=>{console.log(postedComment)
            props.setComments((currentComments)=>{
                return [postedComment, ...currentComments]

            })

        
        })         
          .catch((err)=>{console.log(err)})
          
         setNewComment("");
        }}
      >
          <label htmlFor='new-comment'>Comment: </label>
            <input
          id='new-comment'
          value={newComment}
          onChange={(event) => {
            console.log(event.target.value)
            if(event.target.value==="")return;
            setNewComment(event.target.value);
                    }}
                    ></input>
                <button>Submit</button>

            </form>
        </div>
    );
};

export default SubmitComment;