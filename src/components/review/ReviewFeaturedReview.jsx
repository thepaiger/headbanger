const ReviewFeaturedReview = ({ albumPicture, reviewText }) => {
  return (
    <div>
      <img src={albumPicture} alt="album artwork" />
      <p>{reviewText}</p>
    </div>
  );
};

export default ReviewFeaturedReview;
