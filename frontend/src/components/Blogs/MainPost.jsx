// src/components/MainPost.js
import React from 'react';

const MainPost = () => {
    return (
        <section className="tc-main-post-style1 pt-60 pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="tc-main-post-content">
                            <h4 className="sub-title mb-40">
                                3 Reasons to investing at this moment
                            </h4>
                            <p className="info-text">
                                The first and most obvious, is a noise when <span className="fst-italic">“you apply the brake pedal”</span>. This could be anything from a grinding sound to a high-pitched screech
                            </p>
                            <ul className="info-text mt-40 mb-40">
                                <li>Welsh novelist Sarah Waters sums it up eloquently</li>
                                <li>In their classic book, Creativity in Business, based on a popular course they co-taught</li>
                                <li>Novelist and screenwriter Steven Pressfield</li>
                            </ul>
                            <p className="info-text">
                                That immediately brought to mind one of <a href="#" className="text-decoration-underline text-cyan">my fondest</a> memories, involving my daughter
                            </p>
                            <div className="video-content mt-60">
                                <video width="100%" height="100%" controls>
                                    <source src="assets/img/video.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <p className="info-text mt-50">
                                Unlike many others, the Guardian has no shareholders and no billionaire owner. Just the determination and passion to deliver high-impact global reporting, always free from commercial or political influence.
                            </p>
                            <div className="tc-subscribe-style9 mt-50">
                                <div className="row justify-content-around align-items-center">
                                    <div className="col-lg-4">
                                        <div className="sub-info">
                                            <h5 className="mb-10">Our Newsletter</h5>
                                            <p className="fsz-13px color-666">Subscribe our newsletter to get latest news & promotion</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="sub-form mt-4 mt-lg-0">
                                            <div className="form-group">
                                                <span className="icon">
                                                    <i className="la la-envelope"></i>
                                                </span>
                                                <input type="text" className="form-control" placeholder="Enter your email" />
                                                <button>subscribe</button>
                                            </div>
                                            <p className="mt-2 color-666 fsz-13px fst-italic">By subscribing, you accepted our <a href="#" className="text-decoration-underline fst-normal color-000">Policy</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="info-text mt-50">
                                Our should never complain, complaining is a weak emotion, you gotlife, we breathing, we blessed. Surround yourself with angels. They never said winning was easy
                            </p>
                        </div>
                        <div className="btm-share-post mt-50">
                            <div className="row items">
                                <div className="col-lg-6">
                                    <div className="btm-tags mb-4 mb-lg-0">
                                        <a href="#">wordpress</a>
                                        <a href="#">theme</a>
                                        <a href="#">sports</a>
                                        <a href="#">magazine</a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="btm-sharing d-lg-flex align-items-lg-center justify-content-lg-end">
                                        <p className="text-capitalize me-20 mb-2 mb-lg-0">Share</p>
                                        <div className="share-icons">
                                            <a href="#"><i className="la la-twitter"></i></a>
                                            <a href="#"><i className="la la-facebook-f"></i></a>
                                            <a href="#"><i className="la la-instagram"></i></a>
                                            <a href="#"><i className="la la-youtube"></i></a>
                                            <a href="#"><i className="la la-spotify"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainPost;
