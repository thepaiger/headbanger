import ReviewHeader from './review/ReviewHeader.jsx'
import ReviewVideo from './review/ReviewVideo.jsx'
import ReviewFeaturedReview from './review/ReviewFeaturedReview.jsx'
import ReviewComments from './review/ReviewComments.jsx'
import ReviewAdditionalReview from './review/ReviewAdditionalReview.jsx'

const ReviewPage = () => {
  return (
    <div>
      <h2>ReviewPage</h2>

      <ReviewHeader />

      <ReviewVideo />

      <ReviewFeaturedReview />

      <ReviewComments />

      <ReviewAdditionalReview />
    </div>
  )
}

export default ReviewPage;