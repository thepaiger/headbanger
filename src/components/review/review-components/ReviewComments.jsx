const ReviewComments = ({ comment }) => {
  return (
    <div className="comment-div">
      <em className="comment-username">- {comment.fields.username}</em>
      <p className="comment-text">{comment.fields.comment}</p>
    </div>
  );
};

export default ReviewComments;
