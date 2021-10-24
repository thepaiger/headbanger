import axios from 'axios';
import { useState } from 'react';

const CommentForm = ({COMMENTS_API_URL, toggleFetch, setToggleFetch}) => {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const handlePostRequest = async (ev) => {
    ev.preventDefault();

    const newComment = {
      records: [
        {
          fields: {
            username,
            comment
          }
        }
      ]
    };

    await axios.post(COMMENTS_API_URL, newComment);

    setToggleFetch(!toggleFetch);
  }

  return (
    <form onSubmit={handlePostRequest}>
      <label htmlForm="username">Username</label>
      <input id="username" type="text" onChange={(ev) => setUsername(ev.target.value)} />

      <label htmlFor="comment">Comment</label>
      <textarea id="comment" onChange={(ev) => setComment(ev.target.value)} />

      <input type="submit" value="Post Comment" />
    </form>
  )
}

export default CommentForm;