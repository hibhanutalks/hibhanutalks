import React from 'react'

const BannerRec = () => {
    // Define the banner data as a variable
    const bannerData = {
        image: 'assets/img/banner2.png',
        link: '#'
    };

  return (
    <section className="banner2">
      <div className="container">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <a href={bannerData.link} className="d-block img-cover">
                <img src={bannerData.image} alt="Banner" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerRec
