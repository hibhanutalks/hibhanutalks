import React from 'react'

const ContactUs = () => {
  return (
    <section className="tc-contact-info pt-50 pb-50">
        <div className="container">
            <div className="content">
                <p className="text-uppercase mb-15">Contact Us</p>
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <h2>We’d love to hear from you</h2>
                        <div className="social-icons mt-60">
                            <a href="#"><i className="la la-twitter"></i></a>
                            <a href="#"><i className="la la-facebook-f"></i></a>
                            <a href="#"><i className="la la-instagram"></i></a>
                            <a href="#"><i className="la la-youtube"></i></a>
                            <a href="#"><i className="la la-spotify"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-30 mt-lg-0">
                        <h5 className="sub-title fsz-24px mb-20 fw-bold">Headquater</h5>
                        <ul>
                            <li className="mb-15"><a href="#">223 Thatcher Road St, Mahattan, NY 10632</a></li>
                            <li className="mb-15"><a href="#">(+051) 3235 68 69</a></li>
                            <li className="mb-15"><a href="#">hello@newzin.com</a></li>
                            <li className="mb-15"><a href="#">support@newzin.com</a></li>
                            <li className="mb-15"><a href="#">career@newzin.com</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 mt-30 mt-lg-0">
                        <h5 className="sub-title fsz-24px mb-20 fw-bold">Office Branch</h5>
                        <ul>
                            <li className="mb-15"><a href="#">925 Bald Hill St, Asheville, NC 28803</a></li>
                            <li className="mb-15"><a href="#">(+005) 800 500 1234</a></li>
                            <li className="mb-15"><a href="#">contact@newzin.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs
