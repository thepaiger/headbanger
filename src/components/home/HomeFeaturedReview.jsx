const HomeFeaturedReview = ({ reviewData }) => {
  return (
    <div className="home-featured-review-div">
      <div className="review-header">
        <div className="album-title-div">
          <div className="album-picture-div">
            <img
              className="album-picture"
              src={reviewData.fields.albumPicture}
            />
          </div>
          <div className="title-div">
            <h3 className="band-name">{reviewData.fields.bandName}</h3>
            <h4 className="album-name">{reviewData.fields.albumName}</h4>
          </div>
        </div>
      </div>
      <p className="review-text">
        {reviewData.fields.reviewText.substring(0, 400)}...
      </p>
    </div>
  );
};

export default HomeFeaturedReview;
