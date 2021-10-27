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
    <form className="commentForm card" onSubmit={handlePostRequest}>
      <h3 className="formHeader">Leave a comment:</h3>

      <label className="usernameLabel" htmlFor="username">
        Username
      </label>
      <input
        className="usernameInput"
        id="username"
        type="text"
        value={username}
        placeholder="Enter a username"
        name="username"
        onChange={(ev) => setUsername(ev.target.value)}
        required
      />

      <label className="commentLabel" htmlFor="comment">
        Comment
      </label>
      <textarea
        className="commentInput"
        id="comment"
        value={comment}
        placeholder="Leave comment here..."
        name="comment"
        rows="5"
        onChange={(ev) => setComment(ev.target.value)}
        required
      />

      <input
        className="commentSubmit"
        type="submit"
        value="Post Comment"
        onClick={(ev) => setReferenceId(reviewId)}
      />
    </form>
  );
};

export default CommentForm;
