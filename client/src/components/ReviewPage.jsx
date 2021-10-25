// import ReviewHeader from './review/ReviewHeader'
// import ReviewVideo from './review/ReviewVideo'
// import ReviewFeaturedReview from './review/ReviewFeaturedReview'
import ReviewComments from './review/ReviewComments'
// import ReviewAdditionalReview from './review/ReviewAdditionalReview'
import CommentForm from './review/CommentForm'

import ReactPlayer from 'react-player/youtube'

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom'

const API_URL = 'https://api.airtable.com/v0/appa27lZe3kGcUjPk';
const API_KEY = '/?api_key=keyZ41m4JJPUVavOs'
const REVIEW_TABLE = '/reviews'
const COMMENTS_TABLE = '/comments'


// const REVIEW_API_URL =
//     "https://api.airtable.com/v0/appa27lZe3kGcUjPk/reviews?api_key=keyZ41m4JJPUVavOs";
// const REVIEW_API_URL =
//     "https://api.airtable.com/v0/appa27lZe3kGcUjPk/reviews?api_key=keyZ41m4JJPUVavOs";
const COMMENTS_API_URL =
    "https://api.airtable.com/v0/appa27lZe3kGcUjPk/comments?api_key=keyZ41m4JJPUVavOs";

const ReviewPage = () => {
  const [review, setReview] = useState([]);
  const [comments, setComments] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  
  const id = useParams();
  console.log(id.id)
  
  useEffect(() => {
  const getReview = async () => {
    const resp = await axios.get(`${API_URL}${REVIEW_TABLE}/${id.id}${API_KEY}`);
    console.log(resp.data);
    setReview(resp.data);
  };
  getReview();
    

  const getComments = async () => {
    const resp = await axios.get(COMMENTS_API_URL);
    console.log(resp.data.records);
    setComments(resp.data.records);
  };
  getComments();

  }, [toggleFetch]);    

  let albumName = "";
  let bandName = "";
  let albumPicture = "";
  let reviewText = "";
  // if (review.length === 0) {
  //   albumName = "loading";
  // } else {
  //   albumName = review.fields.albumName;
  // }

  review.length === 0 ? albumName = "loading" : albumName = review.fields.albumName
  review.length === 0 ? bandName = "loading" : bandName = review.fields.bandName
  review.length === 0 ? albumPicture = "loading" : albumPicture = review.fields.albumPicture
  review.length === 0 ? reviewText = "loading" : reviewText = review.fields.reviewText

  // albumName = review.fields.albumName;
  // const albumPicture = review.fields.albumPicture;
  // const bandName = review.fields.bandName;
  // const reviewText = review.fields.reviewText;

  return (
    <div>
      <h2>ReviewPage</h2>
      <h3>{albumName} - {bandName}</h3>
      <img src={albumPicture} />
      <p>{reviewText}</p>
        
      
      
      <CommentForm
        COMMENTS_API_URL={COMMENTS_API_URL}
        toggleFetch={toggleFetch}
        setToggleFetch={setToggleFetch}
      />

      {comments.map((comment) => (
        <ReviewComments
          key={comment.id}
          comment={comment}
        />
      ))}

    </div>
  )
}

export default ReviewPage;

{/* <ReviewHeader
          // key={review.id}
          reviewData={review}
        /> */}

{/* <div>
        <h5>ReviewHeader</h5>

        <h3>{reviewData.fields.bandName}</h3>
        <h4>{reviewData.fields.albumName}</h4>
      </div> */}

        {/* <ReviewVideo
          // key={review.id}
          reviewData={review}
        /> */}

      // <div>
      //   <h5>ReviewVideo</h5>
        
      //   <ReactPlayer url={reviewData.fields.musicVideo} />
      // </div>

        {/* <ReviewFeaturedReview
        // key={review.id}
        reviewData={review}
        /> */}

      // <div>
      //   <h5>ReviewFeaturedReview</h5>

      //   <img src={reviewData.fields.albumPicture}></img>
      //   <p>{reviewData.fields.reviewText}</p>
      // </div>
      {/* {reviews.slice(0,1).map((review) => (
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
      ))} */}

      {/* {reviews.slice(1).map((review) => (
        <ReviewAdditionalReview
          key={review.id}
          reviewData={review}
        />
      ))} */}
      
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

