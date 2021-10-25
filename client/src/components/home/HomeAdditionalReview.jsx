import {Link} from 'react-router-dom';

const HomeAdditionalReview = ({reviewData}) => {
  return (
    <div>
      <h5>HomeAdditionalReview</h5>

      <img src={reviewData.fields.albumPicture}></img>
      <h3>{reviewData.fields.bandName}</h3>
      <h4>{reviewData.fields.albumName}</h4>
      <p>
        {reviewData.fields.reviewText.substring(0, 200)}
      </p>
    </div>
  )
}

export default HomeAdditionalReview;