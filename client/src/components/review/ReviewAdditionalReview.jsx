import { useEffect } from 'react';

const ReviewAdditionalReview = ({ additionalReview, toggleFetch, setToggleFetch, id }) => {
  // useEffect(() => {
  // }, [toggleFetch]);

  // if (id !== additionalReview.id) {
  //   toggleFetch
  // }

  // id is the current featured review ID from useParams
  // console.log(id.id)
  // console.log(additionalReview.id)

  return (
    <div>
      <img src={additionalReview.fields.albumPicture}></img>
      <h3>{additionalReview.fields.bandName}</h3>
      <h4>{additionalReview.fields.albumName}</h4>
      <p>
        {additionalReview.fields.reviewText.substring(0, 200)}
      </p>
    </div>
  )
}

export default ReviewAdditionalReview;