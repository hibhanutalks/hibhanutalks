import React from 'react'

const Error = () => {
  return (
    <section className="tc-404-info text-center">
        <div className="container">
            <h1>404</h1>
            <h3>Oops! Page Not Found.</h3>
            <p className="color-777">
                Sorry, the requested page could not be found. 
                <a href="#" className="fw-bold color-000"> Try searching?</a>
            </p>
            <a href="/" className="butn bg-main text-white hover-shadow mt-50">
                <span>Back To Home</span>
            </a>
        </div>
    </section>
  )
}

export default Error
