import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './NextPrevPostSlider.css';

const NextPrevPostSlider = () => {
    return (
        <section className="tc-next-prev-post mb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="tc-next-prev-post-slider">
                            <Swiper
                                spaceBetween={30}
                                navigation
                            >
                                <SwiperSlide>
                                    <a href="#" className="item">
                                        <p className="color-666 fsz-12px text-uppercase">previous</p>
                                        <h6 className="title">Hawks acquire All-Star guard Murray from Spurs</h6>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="#" className="item">
                                        <p className="color-666 fsz-12px text-uppercase">next</p>
                                        <h6 className="title">PFF: Bills should consider free agent CB Xavier Rhodes</h6>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="#" className="item">
                                        <p className="color-666 fsz-12px text-uppercase">next</p>
                                        <h6 className="title">PFF: Bills should consider free agent CB Xavier Rhodes</h6>
                                    </a>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NextPrevPostSlider;
