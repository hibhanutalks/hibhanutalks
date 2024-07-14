import React from 'react';

const MiniSearch = () => {
  return (
    <div className="nav-search-style1">
      <div className="container mx-auto p-0">
        <div className="row justify-center items-center lg:gap-5">
          <div className="col-lg-4">
            <div className="info">
              <h5>
                you can search by category <br /> or news title
              </h5>
            </div>
          </div>
          <div className="col-lg-6">
            <form className="form">
              <span className="text-gray-700 italic text-capitalize mb-2 text-sm">Enter Keyword</span>
              <div className="form-group flex items-center">
                <span className="icon">
                  <i className="la la-search"></i>
                </span>
                <input type="text" className="form-control" placeholder="Elon Musk ..." />
                <button type="submit">search</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniSearch;
