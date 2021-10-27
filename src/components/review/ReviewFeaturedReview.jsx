const ReviewFeaturedReview = ({ albumPicture, reviewText }) => {
  return (
    <div className="review-featured-review-div card">
      <div className="album-picture-div">
        <img className="album-picture" src={albumPicture} alt="album artwork" />
      </div>
      <div className="review-text-div">
        {reviewText.split("\n").map((textLine) => (
          <p className="review-text" key={textLine}>
            {textLine}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ReviewFeaturedReview;
