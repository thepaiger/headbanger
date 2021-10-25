
const ReviewComments = ({comment}) => {
  return (
    <div>
      <em>{comment.fields.username}</em>
      <p>{comment.fields.comment}</p>
    </div>
  )
}

export default ReviewComments;