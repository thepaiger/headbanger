import HomeHeader from './home/HomeHeader.jsx'
import HomeFeaturedReview from './home/HomeFeaturedReview'
import HomeAdditionalReview from './home/HomeAdditionalReview'

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const REVIEW_API_URL =
  "https://api.airtable.com/v0/appa27lZe3kGcUjPk/reviews?api_key=keyZ41m4JJPUVavOs";

const HomePage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const resp = await axios.get(REVIEW_API_URL);
      console.log(resp.data.records);
      setReviews(resp.data.records);
    };
    getReviews();
  }, []);

  return (
    <div>
      <HomeHeader />
      
        {reviews.slice(0, 2).map((review) => (
          <Link to={`/review/${review.id}`}>
            <HomeFeaturedReview
              key={review.id}
              reviewData={review}
            />
          </Link>
        ))}
      
      {reviews.slice(2).map((review) => (
        <Link to={`/review/${review.id}`}>
          <HomeAdditionalReview
            key={review.id}
            reviewData={review}
          />
        </Link>
      ))}
    </div>
  )
}

export default HomePage;