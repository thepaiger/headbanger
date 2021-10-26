// import axios from 'axios';
// import { useState } from 'react';

// const CommentForm = ({COMMENTS_API_URL, toggleFetch, setToggleFetch, reviewId}) => {
//   const [username, setUsername] = useState('');
//   const [comment, setComment] = useState('');
//   const [referenceId, setReferenceId] = useState('');

//   const handlePostRequest = async (ev) => {
//     ev.preventDefault();

//     const newComment = {
//       records: [
//         {
//           fields: {
//             username,
//             comment,
//             referenceId
//           }
//         }
//       ]
//     };
//     await axios.post(COMMENTS_API_URL, newComment);

//     setUsername('');
//     setComment('');

//     setToggleFetch(!toggleFetch);
//   }

//   return (
//     <form onSubmit={handlePostRequest}>
//       <label htmlFor="username">Username</label>
//       <input id="username" type="text" value={username} onChange={(ev) => setUsername(ev.target.value)} />

//       <label htmlFor="comment">Comment</label>
//       <textarea id="comment" value={comment} onChange={(ev) => setComment(ev.target.value)} />

//       <input type="submit" value="Post Comment" onClick={(ev) => setReferenceId(reviewId)} />
//     </form>
//   )
// }

// export default CommentForm;