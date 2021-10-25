import { Link } from 'react-router-dom';

const ReviewAdditionalReview = ({additionalReview}) => {
  return (
    <div>
      <h5>ReviewAdditionalReview</h5>

      <img src={additionalReview.fields.albumPicture}></img>
      <h3>{additionalReview.fields.bandName}</h3>
      <h4>{additionalReview.fields.albumName}</h4>
      <p>
        {additionalReview.fields.reviewText.substring(0, 200)}
        <Link to="/">...Read more</Link>
        {/* NEED TO CONNECT READ MORE TO OTHER REVIEWS!! */}
      </p>
    </div>
  )
}

export default ReviewAdditionalReview;