import HomeFeaturedReview from "./home-components/HomeFeaturedReview";
import HomeAdditionalReview from "./home-components/HomeAdditionalReview";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

const REVIEW_API_URL = `https://api.airtable.com/v0/appa27lZe3kGcUjPk/reviews?api_key=${process.env.REACT_APP_API_KEY}`;

const HomePage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const resp = await axios.get(REVIEW_API_URL);
      setReviews(resp.data.records);
    };
    getReviews();
  }, []);

  return (
    <div className="home-page-div">
      {/* slicing then mapping to grab first two reviews for the 'featured' section */}
      {reviews.slice(0, 2).map((review) => (
        <Link className="link" to={`/review/${review.id}`} key={review.id}>
          <HomeFeaturedReview reviewData={review} />
        </Link>
      ))}

      <div className="card-background">
        <div className="home-additional-reviews-div card">
          {/* slicing then mapping to grab all reviews AFTER the first two for the 'additional' section */}
          {reviews.slice(2).map((review) => (
            <Link className="link" to={`/review/${review.id}`} key={review.id}>
              <HomeAdditionalReview reviewData={review} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
