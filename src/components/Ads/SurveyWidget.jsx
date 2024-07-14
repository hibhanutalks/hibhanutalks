import React from 'react'

const SurveyWidget = () => {
  return (
<div className="tc-widget-survey-style1">
      <p className="color-000 text-uppercase mb-20 ltspc-1">Quick Survey</p>
      <div className="ques-title lh-4">
        How was your experience on Newzin?
      </div>
      <div className="ansr-content">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="quesCheck" id="quesCheck1" />
          <label className="form-check-label" htmlFor="quesCheck1">
            Awesome, I’m satisfied!
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="quesCheck" id="quesCheck2" />
          <label className="form-check-label" htmlFor="quesCheck2">
            Normal
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="quesCheck" id="quesCheck3" />
          <label className="form-check-label" htmlFor="quesCheck3">
            Bad! Need improve more
          </label>
        </div>
      </div>
      <div className="btns">
        <a href="#" className="btn active me-2">
          Submit
        </a>
        <a href="#" className="btn">
          Result
        </a>
      </div>
      <small className="pl-num">
        <span className="color-000">24,562 </span> Peoples joined
      </small>
    </div>
  )
}

export default SurveyWidget
