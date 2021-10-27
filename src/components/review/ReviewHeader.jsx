const ReviewHeader = ({ bandName, albumName }) => {
  return (
    <div className="review-header-div card">
      <h3 className="band-name">{bandName}</h3>
      <h4 className="album-name">{albumName}</h4>
    </div>
  );
};

export default ReviewHeader;
