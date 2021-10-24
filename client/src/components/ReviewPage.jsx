import ReviewHeader from './review/ReviewHeader'
import ReviewVideo from './review/ReviewVideo'
import ReviewFeaturedReview from './review/ReviewFeaturedReview'
import ReviewComments from './review/ReviewComments'
import ReviewAdditionalReview from './review/ReviewAdditionalReview'
import CommentForm from './review/CommentForm'


import axios from "axios";
  import { useEffect, useState } from "react";

const REVIEW_API_URL =
    "https://api.airtable.com/v0/appa27lZe3kGcUjPk/reviews?api_key=keyZ41m4JJPUVavOs";
const COMMENTS_API_URL =
    "https://api.airtable.com/v0/appa27lZe3kGcUjPk/comments?api_key=keyZ41m4JJPUVavOs";

const ReviewPage = () => {

    const [reviews, setReviews] = useState([]);
    const [comments, setComments] = useState([]);
    const [toggleFetch, setToggleFetch] = useState(true);
  
    useEffect(() => {
      const getReviews = async () => {
        const resp = await axios.get(REVIEW_API_URL);
        console.log(resp.data.records);
        setReviews(resp.data.records);
      };
      getReviews();


      const getComments = async () => {
        const resp = await axios.get(COMMENTS_API_URL);
        console.log(resp.data.records);
        setComments(resp.data.records);
      };
      getComments();

    }, [toggleFetch]);


  return (
    <div>
      <h2>ReviewPage</h2>

      {reviews.slice(0,1).map((review) => (
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
      ))}

      {reviews.slice(1).map((review) => (
        <ReviewAdditionalReview
          key={review.id}
          reviewData={review}
        />
      ))}
      
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