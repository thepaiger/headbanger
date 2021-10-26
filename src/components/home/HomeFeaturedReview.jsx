const HomeFeaturedReview = ({ reviewData }) => {
    return (
    <div className="home-featured-review-div">
      <img className="album-picture" src={reviewData.fields.albumPicture}></img>
      <h3 className="band-name">{reviewData.fields.bandName}</h3>
      <h4 className="album-name">{reviewData.fields.albumName}</h4>
      <p className="review-text">
        {reviewData.fields.reviewText.substring(0, 200)}...
      </p>
    </div>
  )
}

export default HomeFeaturedReview;
