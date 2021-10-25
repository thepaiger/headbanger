import ReviewHeader from "./review/ReviewHeader";
import ReviewVideo from "./review/ReviewVideo";
import ReviewFeaturedReview from "./review/ReviewFeaturedReview";
import ReviewComments from "./review/ReviewComments";
import ReviewAdditionalReview from "./review/ReviewAdditionalReview";
import CommentForm from "./review/CommentForm";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "https://api.airtable.com/v0/appa27lZe3kGcUjPk";
const API_KEY = "/?api_key=keyZ41m4JJPUVavOs";
const REVIEW_TABLE = "/reviews";
// const COMMENTS_TABLE = '/comments'

const COMMENTS_API_URL =
  "https://api.airtable.com/v0/appa27lZe3kGcUjPk/comments?api_key=keyZ41m4JJPUVavOs";

const ReviewPage = () => {
  const [review, setReview] = useState([]);
  const [additionalReviews, setAdditionalReviews] = useState([]);
  const [comments, setComments] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  const id = useParams();
  console.log(id.id);

  useEffect(() => {
    const getReview = async () => {
      const resp = await axios.get(
        `${API_URL}${REVIEW_TABLE}/${id.id}${API_KEY}`
      );
      console.log(resp.data);
      setReview(resp.data);
    };
    getReview();

    console.log(review);

    const getAdditionalReviews = async () => {
      const resp = await axios.get(`${API_URL}${REVIEW_TABLE}${API_KEY}`);
      console.log(resp.data.records);
      setAdditionalReviews(resp.data.records);

      // let tempArr = resp.data.records.filter(e => e.id !== 'ecMOsqkKNY6ORuyB');
      // console.log(tempArr)
      // console.log(review)
      // let removeIndex = tempArr.indexOf(review);
      // console.log(-removeIndex)
      // tempArr.splice(removeIndex, 1);

      //   const removeReview = (resp.data.records) => {

      // }

      let additionalReviewsArr = [];
      let recordID = "";
      let reviewID = "";
      for (let i = 0; i < resp.data.records.length; i++) {
        // if (resp.data.records[i].id != review.id) {
        recordID = resp.data.records[i].id;
        reviewID = review.id;
        if (recordID != reviewID) {
          console.log("ids dont match");
          additionalReviewsArr.push(resp.data.records[i]);
        }
      }
      console.log(resp.data.records[1].id);
      console.log(resp.data.records);

      // setAdditionalReviews(resp.data.records);
      // setAdditionalReviews(additionalReviewsArr);
    };
    getAdditionalReviews();

    const getComments = async () => {
      const resp = await axios.get(COMMENTS_API_URL);
      console.log(resp.data.records);
      setComments(resp.data.records);

      console.log(comments)
    };
    getComments();
  }, [toggleFetch]);

  let reviewComments = [];
  if (comments.length !== 0) {
    let j = 0;
    for (let i = 0; i < comments.length; i++) {
      if (comments[i].fields.referenceId === id.id) {
        console.log(j);
        console.log(comments[i]);
        // reviewComments = comments[i].push;
        reviewComments[j] = comments[i];
        j++;
      }
    }
    // for (let i = 0; i < comments.length; i++) {
    //   reviewComments = comments[i].push;
    // }
  } else {
    reviewComments = [
      {
        id: "loading",
        fields: {
          username: "loading",
          comment: "loading",
          referenceId: "loading",
        },
        createdTime: "loading",
      },
    ];
  }

  console.log(comments);

  // let reviewComments = [];
  // if (comments.length !== 0) {
  //   let j = 0;
  //   for (let i = 0; i < comments.length; i++) {
  //     if (comments[i].fields.referenceId === id.id) {
  //       console.log(j);
  //       console.log(comments[i]);
  //       reviewComments[j] = comments[i];
  //       j++;
  //     }
  //   }
  //   // for (let i = 0; i < comments.length; i++) {
  //   //   reviewComments = comments[i].push;
  //   // }
  // } else {
  //   reviewComments = [
  //     {
  //       id: "loading",
  //       fields: {
  //         username: "loading",
  //         comment: "loading",
  //         referenceId: "loading"
  //       },
  //       createdTime: "loading"
  //     },
  //   ];
  // }

  // console.log(reviewComments);
  // setComments(reviewComments)

  let albumName = "";
  let bandName = "";
  let albumPicture = "";
  let reviewText = "";
  let musicVideo = "";

  review.length === 0
    ? (albumName = "loading")
    : (albumName = review.fields.albumName);
  review.length === 0
    ? (bandName = "loading")
    : (bandName = review.fields.bandName);
  review.length === 0
    ? (albumPicture = "loading")
    : (albumPicture = review.fields.albumPicture);
  review.length === 0
    ? (reviewText = "loading")
    : (reviewText = review.fields.reviewText);
  review.length === 0
    ? (musicVideo = "loading")
    : (musicVideo = review.fields.musicVideo);

  console.log(review.id);
  console.log(review);

  console.log(additionalReviews);

  return (
    <div>
      <ReviewHeader bandName={bandName} albumName={albumName} />

      <ReviewVideo musicVideo={musicVideo} />

      <ReviewFeaturedReview
        albumPicture={albumPicture}
        reviewText={reviewText}
      />

      {additionalReviews.map((additionalReview) => (
        <ReviewAdditionalReview
          key={additionalReview.id}
          additionalReview={additionalReview}
        />
      ))}

      <CommentForm
        COMMENTS_API_URL={COMMENTS_API_URL}
        toggleFetch={toggleFetch}
        setToggleFetch={setToggleFetch}
        reviewId={id.id}
      />

      {reviewComments.map((comment) => (
        <ReviewComments key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default ReviewPage;

{
  /* <ReviewHeader
          // key={review.id}
          reviewData={review}
        /> */
}

{
  /* <div>
        <h5>ReviewHeader</h5>

        <h3>{reviewData.fields.bandName}</h3>
        <h4>{reviewData.fields.albumName}</h4>
      </div> */
}

{
  /* <ReviewVideo
          // key={review.id}
          reviewData={review}
        /> */
}

// <div>
//   <h5>ReviewVideo</h5>

//   <ReactPlayer url={reviewData.fields.musicVideo} />
// </div>

{
  /* <ReviewFeaturedReview
        // key={review.id}
        reviewData={review}
        /> */
}

// <div>
//   <h5>ReviewFeaturedReview</h5>

//   <img src={reviewData.fields.albumPicture}></img>
//   <p>{reviewData.fields.reviewText}</p>
// </div>
{
  /* {reviews.slice(0,1).map((review) => (
        <ReviewHeader
          key={review.id}
          reviewData={review}
        />
      ))}

      {reviews.slice(0,1).map((review) => (
        <ReviewVideo
          key={review.id}
          reviewData={review}
        />
      ))}

      {reviews.slice(0,1).map((review) => (
        <ReviewFeaturedReview
        key={review.id}
        reviewData={review}
        />
      ))} */
}

{
  /* {reviews.slice(1).map((review) => (
        <ReviewAdditionalReview
          key={review.id}
          reviewData={review}
        />
      ))} */
}

//   <div>
//   <h5>ReviewAdditionalReview</h5>

//   <img src={reviewData.fields.albumPicture}></img>
//   <h3>{reviewData.fields.bandName}</h3>
//   <h4>{reviewData.fields.albumName}</h4>
//   <p>
//     {reviewData.fields.reviewText.substring(0, 200)}
//     <Link to={`/review/${reviewData.fields.albumName}`}>...Read more</Link>
//     {/* NEED TO CONNECT READ MORE TO OTHER REVIEWS!! */}
//   </p>
// </div>
