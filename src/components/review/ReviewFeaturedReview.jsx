const ReviewFeaturedReview = ({albumPicture, reviewText}) => {
  return (
    <div>
      <img src={albumPicture}></img>
      <p>{reviewText}</p>
    </div>
  )
}

export default ReviewFeaturedReview;