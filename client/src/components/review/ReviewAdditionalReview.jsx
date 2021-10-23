
const ReviewAdditionalReview = ({reviewData}) => {
  return (
    <div>
      <h5>ReviewAdditionalReview</h5>

      <img src="{reviewData.fields.albumPicture}"></img>
      <h3>{reviewData.fields.bandName}</h3>
      <h4>{reviewData.fields.albumName}</h4>
      <p>{reviewData.fields.reviewText}</p>
    </div>
  )
}

export default ReviewAdditionalReview;