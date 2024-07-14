import React from 'react'
import Mustreadsidebar from './Mustreadsidebar'
import Mustreadright from './Mustreadright'

const MustRead = () => {
  return (
    <section class="pt-50 pb-50">
       <div class="container">
          <div class="row">
            <div class="col-lg-9">
                <Mustreadright />
            </div>
            <div class="col-lg-3">
                <Mustreadsidebar />
            </div>    
          </div>
        </div>
    </section>
  )
}

export default MustRead
