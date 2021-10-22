// import ReviewHeader from './review/ReviewHeader.jsx'
// import ReviewVideo from './review/ReviewVideo.jsx'
// import ReviewFeaturedReview from './review/ReviewFeaturedReview.jsx'
// import ReviewComments from './review/ReviewComments.jsx'
// import ReviewAdditionalReview from './review/ReviewAdditionalReview.jsx'

// import axios from "axios";
// import { useEffect, useState } from "react";

// const API_URL =
//   "https://api.airtable.com/v0/appa27lZe3kGcUjPk/reviews?api_key=keyZ41m4JJPUVavOs";

const ReviewPage = () => {
  // const [reviews, setReviews] = useState([]);
  // const [toggleFetch, setToggleFetch] = useState(true);

  // useEffect(() => {
  //   const getReviews = async () => {
  //     const resp = await axios.get(API_URL);
  //     console.log(resp.data.records);
  //     setReviews(resp.data.records);
  //   };
  //   getReviews();
  // }, [toggleFetch]);


  return (
    <div>
      <h2>ReviewPage</h2>

      {/* <h4>{reviewData.fields.bandName}</h4> */}

      {/* <ReviewHeader />

      <ReviewVideo />

      <ReviewFeaturedReview />

      <ReviewComments /> */}

      {/* <ReviewAdditionalReview
        reviewData={reviewData}
      /> */}
    </div>
  )
}

export default ReviewPage;