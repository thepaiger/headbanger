
const ReviewFeaturedReview = ({reviewData}) => {
  return (
    <div>
      <h5>ReviewFeaturedReview</h5>

      <img src={reviewData.fields.albumPicture}></img>
      <p>{reviewData.fields.reviewText}</p>
    </div>
  )
}

export default ReviewFeaturedReview;