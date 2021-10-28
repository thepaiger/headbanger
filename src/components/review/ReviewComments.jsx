const ReviewComments = ({ comment }) => {
  return (
    <div className="comment-div">
      <em>{comment.fields.username}</em>
      <p>{comment.fields.comment}</p>
    </div>
  );
};

export default ReviewComments;
