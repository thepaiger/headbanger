// import HomeHeader from './home/HomeHeader.jsx'
import HomeFeaturedReview from './home/HomeFeaturedReview'
// import HomeAdditionalReview from './home/HomeAdditionalReview.jsx'

import axios from "axios";
import { useEffect, useState } from "react";

const API_URL =
  "https://api.airtable.com/v0/appa27lZe3kGcUjPk/reviews?api_key=keyZ41m4JJPUVavOs";

const HomePage = () => {

  const [reviews, setReviews] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const getReviews = async () => {
      const resp = await axios.get(API_URL);
      console.log(resp.data.records);
      setReviews(resp.data.records);
    };
    getReviews();
  }, [toggleFetch]);

  return (
    <div>
      <h2>HomePage</h2>

      <p>{reviews[0].fields.bandName}</p>

      <HomeFeaturedReview
        reviews={reviews}
      />
    </div>
  )
}

export default HomePage;




{/* <HomeHeader /> */}

      {/* {reviews.map((review) => (
        <HomeFeaturedReview
          key={review.id}
          reviewData={review}
        />
      ))} */}


      

      {/* <HomeAdditionalReview /> */}