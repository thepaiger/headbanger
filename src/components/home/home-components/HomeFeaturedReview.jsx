const HomeFeaturedReview = ({ reviewData }) => {
  return (
    <div className="card-background">
      <div className="home-featured-review-div card div-hover">
        <div className="album-title-div">
          <div className="album-picture-div">
            <img
              className="album-picture"
              src={reviewData.fields.albumPicture}
              alt="album artwork"
            />
          </div>
          <div className="title-div">
            <h3 className="band-name">{reviewData.fields.bandName}</h3>
            <h4 className="album-name">{reviewData.fields.albumName}</h4>
          </div>
        </div>
        <p className="review-text">
          {reviewData.fields.reviewText.substring(0, 400)}...
        </p>
      </div>
    </div>
  );
};

export default HomeFeaturedReview;
