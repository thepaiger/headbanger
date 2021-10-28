const ReviewHeader = ({ bandName, albumName, reviewAuthor, reviewSource }) => {
  return (
    <div className="review-header-div card">
      <h3 className="band-name">{bandName}</h3>
      <h4 className="album-name">{albumName}</h4>
      <p className="review-author">Author: {reviewAuthor}</p>
      <p className="review-source">
        <a href={reviewSource}>[Click here for original review]</a>
      </p>
    </div>
  );
};

export default ReviewHeader;
