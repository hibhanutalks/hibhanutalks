import React from 'react'
import BreakingNews from './Body/BreakingNews'
import WebStories from './Body/WebStories/WebStories'
import LatestNews from './Body/LatestNews'
import Banner from './Ads/Banner'
import MustRead from './Body/MustRead'
import HotVideos from './Body/HotVideos'
import LifestyleSection from './Body/LifestyleSection'
import DownloadSection from './Ads/DownloadSection'
import OtherSections from './Body/OtherSections'

const Home = () => {
  return (
    <div>
      <main>
        <BreakingNews />
        <WebStories />
        <LatestNews />
        <Banner />
        <MustRead />
        <HotVideos />
        <LifestyleSection />
        <OtherSections />
        <DownloadSection />
      </main>
    </div>
  )
}

export default Home
