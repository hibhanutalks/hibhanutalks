import React from 'react'
import SportsSection from './SportsSection'
import EntertainmentSection from './EntertainmentSection'
import TravelSection from './TravelSection'

const OtherSections = () => {
  return (
    <section class="another-news pt-50 pb-50 border-1 border-top brd-gray">
        <div class="container">
            <div class="content">
                <div class="row">
                    <div class="col-lg-4">
                        <SportsSection />
                    </div>
                    <div class="col-lg-4">
                        <EntertainmentSection />
                    </div>
                    <div class="col-lg-4">
                        <TravelSection />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OtherSections
