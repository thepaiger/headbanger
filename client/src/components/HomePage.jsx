// import HomeHeader from './home/HomeHeader.jsx'
import HomeFeaturedReview from './home/HomeFeaturedReview'
import HomeAdditionalReview from './home/HomeAdditionalReview'

// import ReviewPage from './ReviewPage'

import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Link } from 'react-router-dom';

const REVIEW_API_URL =
  "https://api.airtable.com/v0/appa27lZe3kGcUjPk/reviews?api_key=keyZ41m4JJPUVavOs";

const HomePage = () => {

  const [reviews, setReviews] = useState([]);
  // const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const getReviews = async () => {
      const resp = await axios.get(REVIEW_API_URL);
      console.log(resp.data.records);
      setReviews(resp.data.records);
    };
    getReviews();
  }, []);

  // const albumName = review.fields.bandName;
  // const albumPicture = review.fields.albumPicture;
  // const bandName = review.fields.bandName;
  // const reviewText = review.fields.reviewText;

  return (
    <div>
      <h2>HomePage</h2>

      <h3>HomeHeader</h3>

      <h5>HomeFeaturedReview</h5>  
      {/* <Route to="/review/:id"> */}
        {reviews.slice(0, 2).map((review) => (
          <Link to={`/review/${review.id}`}>
            <HomeFeaturedReview
              key={review.id}
              reviewData={review}
            />
          </Link>
        ))}
      {/* </Route> */}
      

      {/* <Route to="/review/:id">
        {reviews.slice(0, 2).map((review) => (
          <Link to={`/review/${review.id}`}>
            <div>
              <img src={albumPicture}></img>
              <h3>{bandName}</h3>
              <h4>{albumName}</h4>
              <p>
                {reviewText.substring(0, 200)}
                <Link to={`/review/${id}`}>...Read more</Link>
                NEED TO CONNECT READ MORE TO OTHER REVIEWS!!
              </p>
            </div>
          </Link>
        ))}
      </Route> */}
      


      <hr />

      
      <h5>HomeAdditionalReview</h5>
      
      {reviews.slice(2).map((review) => (
        <Link to={`/review/${review.id}`}>
          <HomeAdditionalReview
            key={review.id}
            reviewData={review}
          />
        </Link>
      ))}

      
    
      {/* {reviews.slice(2).map((review) => (
        <Link to={`/review/${review.id}`}>
          <div>
            <img src={albumPicture}></img>
            <h3>{bandName}</h3>
            <h4>{albumName}</h4>
            <p>
              {reviewText.substring(0, 200)}
              <Link to={`/review/${id}`}>...Read more</Link>
              NEED TO CONNECT READ MORE TO OTHER REVIEWS!!
            </p>
          </div>
        </Link>
      ))} */}

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


      

{/* <HomeAdditionalReview /> */ }
      

{/* <Route path="/review/:id">
        <ReviewPage
          key={review.id}
          reviewData={review}
        />
      </Route> */}

      {/* <HomeFeaturedReview
        reviews={reviews}
      /> */}