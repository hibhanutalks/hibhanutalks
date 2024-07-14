import React, { useEffect, useState } from 'react'
import MustReadComp from './MustReadComp'
import BusinessSection from './BusinessSection'
import BannerRec from '../Ads/BannerRec'
import TechnologySection from './TechnologySection'

const Mustreadright = () => {
  return (
    <div>
       <MustReadComp />
       <BusinessSection />
       <BannerRec />
       <TechnologySection />
       <p> Right sides</p>
    </div>
  )
}

export default Mustreadright
