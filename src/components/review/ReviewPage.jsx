import ReviewHeader from "./review-components/ReviewHeader";
import ReviewVideo from "./review-components/ReviewVideo";
import ReviewFeaturedReview from "./review-components/ReviewFeaturedReview";
import ReviewComments from "./review-components/ReviewComments";
import ReviewAdditionalReview from "./review-components/ReviewAdditionalReview";
import CommentForm from "./review-components/CommentForm";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import "./ReviewPage.css";

const API_URL = "https://api.airtable.com/v0/appa27lZe3kGcUjPk";
const API_KEY = `/?api_key=${process.env.REACT_APP_API_KEY}`;
const REVIEW_TABLE = "/reviews";

const COMMENTS_API_URL = `https://api.airtable.com/v0/appa27lZe3kGcUjPk/comments?api_key=${process.env.REACT_APP_API_KEY}`;

const ReviewPage = () => {
  const [review, setReview] = useState([]);
  const [additionalReviews, setAdditionalReviews] = useState([]);
  const [comments, setComments] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  const id = useParams();

  useEffect(() => {
    // get 'featured' review
    const getReview = async () => {
      const resp = await axios.get(
        `${API_URL}${REVIEW_TABLE}/${id.id}${API_KEY}`
      );
      setReview(resp.data);
    };
    getReview();

    // get additional reviews
    const getAdditionalReviews = async () => {
      const resp = await axios.get(`${API_URL}${REVIEW_TABLE}${API_KEY}`);
      setAdditionalReviews(resp.data.records);
    };
    getAdditionalReviews();

    // get comments
    const getComments = async () => {
      const resp = await axios.get(COMMENTS_API_URL);
      setComments(resp.data.records);
    };
    getComments();
  }, [toggleFetch, id]);

  // skip first review for 'featured'; move the rest into 'additional'
  let additionalReviewsArr = [];
  if (additionalReviews.length !== 0) {
    let j = 0;
    for (let i = 0; i < additionalReviews.length; i++) {
      if (additionalReviews[i].id === review.id) {
        j++;
      } else {
        additionalReviewsArr[j] = additionalReviews[i];
        j++;
      }
    }
  } else {
    additionalReviewsArr = [
      {
        id: "loading",
        fields: {
          bandName: "loading",
          albumName: "loading",
          reviewText: "loading",
          reviewAuthor: "loading",
          reviewSource: "loading",
          albumPicture: "loading",
          musicVideo: "loading",
        },
        createdTime: "loading",
      },
    ];
  }

  // only get comments for corresponding review
  let reviewComments = [];
  if (comments.length !== 0) {
    let j = 0;
    for (let i = 0; i < comments.length; i++) {
      if (comments[i].fields.referenceId === id.id) {
        reviewComments[j] = comments[i];
        j++;
      }
    }
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

  // populate review fields
  let albumName = "";
  review.length === 0
    ? (albumName = "loading")
    : (albumName = review.fields.albumName);

  let bandName = "";
  review.length === 0
    ? (bandName = "loading")
    : (bandName = review.fields.bandName);

  let albumPicture = "";
  review.length === 0
    ? (albumPicture = "loading")
    : (albumPicture = review.fields.albumPicture);

  let reviewText = "";
  review.length === 0
    ? (reviewText = "loading")
    : (reviewText = review.fields.reviewText);

  let reviewAuthor = "";
  review.length === 0
    ? (reviewAuthor = "loading")
    : (reviewAuthor = review.fields.reviewAuthor);

  let reviewSource = "";
  review.length === 0
    ? (reviewSource = "loading")
    : (reviewSource = review.fields.reviewSource);

  let musicVideo = "";
  review.length === 0
    ? (musicVideo = "loading")
    : (musicVideo = review.fields.musicVideo);

  // reload due to fetch not trigger automatically when switching to a different review
  const handleReload = () => {
    setToggleFetch(!toggleFetch);
    window.scrollTo(0, 0);
  };

  return (
    <div className="review-page-div">
      <ReviewVideo musicVideo={musicVideo} />

      <div className="card-background">
        <ReviewHeader
          bandName={bandName}
          albumName={albumName}
          reviewAuthor={reviewAuthor}
          reviewSource={reviewSource}
        />

        <ReviewFeaturedReview
          albumPicture={albumPicture}
          reviewText={reviewText}
        />
      </div>

      <div className="card-background">
        <CommentForm
          COMMENTS_API_URL={COMMENTS_API_URL}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
          reviewId={id.id}
        />

        <div className="comments-div">
          {reviewComments.map((comment) => (
            <ReviewComments
              key={comment.id}
              comment={comment}
            />
          ))}
        </div>
      </div>

      <div className="card-background">
        <div className="review-additional-reviews-div">
          {additionalReviewsArr.map((additionalReview) => (
            <Link
              className="link"
              to={`/review/${additionalReview.id}`}
              onClick={handleReload}
              key={additionalReview.id}
            >
              <ReviewAdditionalReview
                key={additionalReview.id}
                additionalReview={additionalReview}
                toggleFetch={toggleFetch}
                setToggleFetch={setToggleFetch}
                id={id}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
