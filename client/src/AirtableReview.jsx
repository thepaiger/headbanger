// import axios from 'axios';
// import { useEffect, useState } from 'react';

// import ReviewAdditionalReview from './components/review/ReviewAdditionalReview.jsx'

// const API_URL = "https://api.airtable.com/v0/appa27lZe3kGcUjPk/reviews?api_key=keyZ41m4JJPUVavOs"

// const AirtableReview = () => {
//   const [reviews, setReviews] = useState([]);
//   const [toggleFetch, setToggleFetch] = useState(true);
//   // const reviewData = [];

//   // useEffect(() => {
//   //   const getReviews = async () => {
//   //     const resp = await axios.get(API_URL);
//   //     console.log(resp.data.records);
//   //     setReviews(resp.data.records);

//   //     // reviewData = resp.data.records;
//   //   };
//   //   getReviews();
//   // }, [toggleFetch])

//   return (
//     <div>
//       <em>AirtableReview</em>

//       <ReviewAdditionalReview
//         // reviewData={reviewData}
//         // reviewData={reviews}
//       />
//     </div>
//   )
// }

// export default AirtableReview;