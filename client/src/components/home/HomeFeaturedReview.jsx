
const HomeFeaturedReview = ({ reviews, reviewData }) => {
  
  // console.log(reviews)
  return (
    <div>
      {/* <p>{reviews[0].fields.bandName}</p> */}

      <img src="{reviewData.fields.albumPicture}"></img>
      <h3>{reviewData.fields.bandName}</h3>
      <h4>{reviewData.fields.albumName}</h4>
      <p>{reviewData.fields.reviewText}</p>
    </div>
  )
}

export default HomeFeaturedReview;



{/* <h2>HomeFeaturedReview</h2> */}
      {/* <h4>{reviewData.fields.bandName}</h4> */}