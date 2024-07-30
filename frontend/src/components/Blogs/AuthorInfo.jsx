import React from 'react';

const AuthorInfo = () => {
    return (
        <section className="tc-author-info-style1 pb-60">
            <div className="container">
                <div className="tc-author-card border-1 border-top brd-gray">
                    <div className="content mt-50 p-50 d-block d-lg-flex bg-gray1">
                        <div className="img img-cover icon-85 rounded-circle overflow-hidden flex-shrink-0 me-30">
                            <img src="assets/img/colums.png" alt="Conor Bradley" />
                        </div>
                        <div className="info">
                            <h5 className="title fsz-24px fw-bold">Conor Bradley</h5>
                            <small className="fsz-12px color-main text-uppercase">nba, nfl editor</small>
                            <div className="text fsz-15px color-666 mt-20">
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde. Lorem ispum dolor sit amet prodigues ametalia
                            </div>
                            <div className="social-links mt-20 fsz-19px">
                                <a href="#" className="me-15"><i className="la la-twitter"></i></a>
                                <a href="#" className="me-15"><i className="la la-facebook-f"></i></a>
                                <a href="#" className="me-15"><i className="la la-instagram"></i></a>
                                <a href="#"><i className="la la-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthorInfo;
