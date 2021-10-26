// import ReviewHeader from "./review/ReviewHeader";
// import ReviewVideo from "./review/ReviewVideo";
// import ReviewFeaturedReview from "./review/ReviewFeaturedReview";
// import ReviewComments from "./review/ReviewComments";
// import ReviewAdditionalReview from "./review/ReviewAdditionalReview";
// import CommentForm from "./review/CommentForm";

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// const API_URL = "https://api.airtable.com/v0/appa27lZe3kGcUjPk";
// const API_KEY = `/?api_key=${process.env.REACT_APP_API_KEY}`;
// const REVIEW_TABLE = "/reviews";

// const COMMENTS_API_URL =
//   `https://api.airtable.com/v0/appa27lZe3kGcUjPk/comments?api_key=${process.env.REACT_APP_API_KEY}`;

// const ReviewPage = () => {
//   const [review, setReview] = useState([]);
//   const [additionalReviews, setAdditionalReviews] = useState([]);
//   const [comments, setComments] = useState([]);
//   const [toggleFetch, setToggleFetch] = useState(true);

//   const id = useParams();

//   useEffect(() => {
//     const getReview = async () => {
//       const resp = await axios.get(
//         `${API_URL}${REVIEW_TABLE}/${id.id}${API_KEY}`
//       );
//       setReview(resp.data);
//     };
//     getReview();

//     const getAdditionalReviews = async () => {
//       const resp = await axios.get(`${API_URL}${REVIEW_TABLE}${API_KEY}`);
//       setAdditionalReviews(resp.data.records);
//     };
//     getAdditionalReviews();

//     const getComments = async () => {
//       const resp = await axios.get(COMMENTS_API_URL);
//       setComments(resp.data.records);
//     };
//     getComments();

//   }, [toggleFetch]);


//   console.log(additionalReviews)

//   let additionalReviewsArr = [];
//   if (additionalReviews.length !== 0) {
//     let j = 0;
//     for (let i = 0; i < additionalReviews.length; i++) {
//       if (additionalReviews[i].id === review.id) {
//         j++;
//       } else {
//         additionalReviewsArr[j] = additionalReviews[i];
//         j++;
//       }
//     }
//   } else {
//     additionalReviewsArr = [
//       {
//         id: "loading",
//         fields: {
//           bandName: "loading",
//           albumName: "loading",
//           reviewText: "loading",
//           albumPicture: "loading",
//           musicVideo: "loading",
//         },
//         createdTime: "loading",
//       },
//     ];
//   }

//   let reviewComments = [];
//   if (comments.length !== 0) {
//     let j = 0;
//     for (let i = 0; i < comments.length; i++) {
//       if (comments[i].fields.referenceId === id.id) {
//         reviewComments[j] = comments[i];
//         j++;
//       }
//     }
//   } else {
//     reviewComments = [
//       {
//         id: "loading",
//         fields: {
//           username: "loading",
//           comment: "loading",
//           referenceId: "loading",
//         },
//         createdTime: "loading",
//       },
//     ];
//   }

//   let albumName = "";
//   let bandName = "";
//   let albumPicture = "";
//   let reviewText = "";
//   let musicVideo = "";

//   review.length === 0
//     ? (albumName = "loading")
//     : (albumName = review.fields.albumName);
//   review.length === 0
//     ? (bandName = "loading")
//     : (bandName = review.fields.bandName);
//   review.length === 0
//     ? (albumPicture = "loading")
//     : (albumPicture = review.fields.albumPicture);
//   review.length === 0
//     ? (reviewText = "loading")
//     : (reviewText = review.fields.reviewText);
//   review.length === 0
//     ? (musicVideo = "loading")
//     : (musicVideo = review.fields.musicVideo);
  
//   const handleReload = () => {
//     setToggleFetch(!toggleFetch);
//     window.scrollTo(0, 0); 
//   }
  
//   return (
//     <div>
//       <ReviewHeader bandName={bandName} albumName={albumName} />

//       <ReviewVideo musicVideo={musicVideo} />

//       <ReviewFeaturedReview
//         albumPicture={albumPicture}
//         reviewText={reviewText}
//       />

//       {additionalReviewsArr.map((additionalReview) => (
//         <Link to={`/review/${additionalReview.id}`} onClick={handleReload}>
//           <ReviewAdditionalReview
//             key={additionalReview.id}
//             additionalReview={additionalReview}
//             toggleFetch={toggleFetch}
//             setToggleFetch={setToggleFetch}
//             id={id}
//           />
//           </Link>
//       ))}

//       <CommentForm
//         COMMENTS_API_URL={COMMENTS_API_URL}
//         toggleFetch={toggleFetch}
//         setToggleFetch={setToggleFetch}
//         reviewId={id.id}
//       />

//       {reviewComments.map((comment) => (
//         <ReviewComments key={comment.id} comment={comment} />
//       ))}
//     </div>
//   );
// };

// export default ReviewPage;

