const ReviewFeaturedReview = ({ albumPicture, reviewText }) => {
  return (
    <div>
      <img src={albumPicture} alt="album artwork" />
      {reviewText.split("\n").map((textLine) => (
        <p>{textLine}</p>
      ))}
    </div>
  );
};

export default ReviewFeaturedReview;
