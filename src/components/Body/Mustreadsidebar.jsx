import React from 'react'
import SocialWidget from '../Widgets/SocialWidget'
import PodcastWidget from '../Widgets/PodcastWidget'
import SponsoredWidget from '../Ads/SponsoredWidget'
import PopularPosts from '../Widgets/PopularPosts'
import SquareWidget from '../Ads/SquareWidget'
import SurveyWidget from '../Ads/SurveyWidget'

const Mustreadsidebar = () => {
  return (
    <div class="tc-side-widgets">
      <SocialWidget />
      <PodcastWidget />
      <SponsoredWidget />
      <PopularPosts />
      <SquareWidget />
      <SurveyWidget />
    </div>
  )
}

export default Mustreadsidebar
