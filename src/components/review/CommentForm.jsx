import axios from "axios";
import { useState } from "react";

const CommentForm = ({
  COMMENTS_API_URL,
  toggleFetch,
  setToggleFetch,
  reviewId,
}) => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const handlePostRequest = async (ev) => {
    ev.preventDefault();

    const newComment = {
      records: [
        {
          fields: {
            username,
            comment,
            referenceId,
          },
        },
      ],
    };
    await axios.post(COMMENTS_API_URL, newComment);

    setUsername("");
    setComment("");

    setToggleFetch(!toggleFetch);
  };

  return (
    <form className="commentForm" onSubmit={handlePostRequest}>
      <h3>Leave a comment:</h3>

      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={username}
        placeholder="Enter a username"
        name="username"
        onChange={(ev) => setUsername(ev.target.value)}
        required
      />

      <label htmlFor="comment">Comment</label>
      <textarea
        id="comment"
        value={comment}
        placeholder="Leave comment here..."
        name="comment"
        rows="5"
        onChange={(ev) => setComment(ev.target.value)}
        required
      />

      <input
        type="submit"
        value="Post Comment"
        onClick={(ev) => setReferenceId(reviewId)}
      />
    </form>
  );
};

export default CommentForm;
