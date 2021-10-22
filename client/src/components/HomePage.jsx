import HomeHeader from './home/HomeHeader.jsx'
import HomeFeaturedReview from './home/HomeFeaturedReview.jsx'
import HomeAdditionalReview from './home/HomeAdditionalReview.jsx'

const HomePage = () => {
  return (
    <div>
      <h2>HomePage</h2>

      <HomeHeader />

      <HomeFeaturedReview />

      <HomeAdditionalReview />
    </div>
  )
}

export default HomePage;