
const ReviewComments = ({comment}) => {
  return (
    <div>
      <h5>ReviewComments</h5>
      
      <em>{comment.fields.username}</em>
      <p>{comment.fields.comment}</p>
    </div>
  )
}

export default ReviewComments;