import React, { useState } from 'react';

const CommentSection = () => {
    const [comments] = useState([
        {
            id: 1,
            author: "David Bowie",
            time: "3 hours ago",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Atume nusaate staman utra phone limo sumeria",
            replies: [
                {
                    id: 2,
                    author: "Logan Cee",
                    time: "2 days ago",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Atume nusaate staman utra phone limo sumeria"
                }
            ]
        },
        {
            id: 3,
            author: "Luis Diaz",
            time: "December 25, 2022",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
            replies: []
        }
    ]);

    const [sortBy, setSortBy] = useState("Most liked");

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <section className="tc-single-post-comments">
            <div className="container">
                <div className="comments-content pt-50 pb-50 border-1 border-top border-dark">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="content">
                                <div className="comments-filter">
                                    <div className="row align-items-center">
                                        <div className="col-4">
                                            <p className="text-uppercase">{comments.length} comments</p>
                                        </div>
                                        <div className="col-8 text-end">
                                            <div className="from-group">
                                                <label htmlFor="sort-comments">Sort by: </label>
                                                <select name="sort-comments" id="sort-comments" className="form-select" value={sortBy} onChange={handleSortChange}>
                                                    <option value="Most liked">Most liked</option>
                                                    <option value="Most views">Most views</option>
                                                    <option value="Most rated">Most rated</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comments-cards">
                                    {comments.map(comment => (
                                        <div key={comment.id} className="comment-replay-cont border-bottom border-1 brd-gray pb-40 pt-40">
                                            <div className="d-flex comment-cont">
                                                <div className="icon-60 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0">
                                                    <img src="assets/img/colums/1.png" alt={comment.author} />
                                                </div>
                                                <div className="inf w-100">
                                                    <div className="title d-flex justify-content-between">
                                                        <h6 className="fw-bold fsz-14px">{comment.author}</h6>
                                                        <span className="time fsz-12px text-uppercase color-999">{comment.time}</span>
                                                    </div>
                                                    <div className="text color-666 fsz-12px mt-10">
                                                        {comment.text}
                                                    </div>
                                                    <a href="#" className="butn border border-1 mt-20 py-2 px-3">
                                                        <span className="fsz-11px">replay</span>
                                                    </a>
                                                </div>
                                            </div>
                                            {comment.replies.map(reply => (
                                                <div key={reply.id} className="d-flex comment-replay ps-5 mt-30 ms-4">
                                                    <div className="icon-40 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0">
                                                        <img src="assets/img/colums/2.png" alt={reply.author} />
                                                    </div>
                                                    <div className="inf w-100">
                                                        <div className="title d-flex justify-content-between">
                                                            <h6 className="fw-bold fsz-14px">{reply.author}</h6>
                                                            <span className="time fsz-12px text-uppercase color-999">{reply.time}</span>
                                                        </div>
                                                        <div className="text color-666 fsz-12px mt-10">
                                                            {reply.text}
                                                        </div>
                                                        <a href="#" className="butn border border-1 mt-20 py-2 px-3">
                                                            <span className="fsz-11px">replay</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                                <form className="comment-form d-block pt-30" onSubmit={handleSubmit}>
                                    <p className="text-uppercase mb-30">Leave A Comment</p>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group mb-30">
                                                <textarea className="form-control rounded-0 fsz-12px p-3" name="comment" rows="6" placeholder="Write your comment here"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group mb-4 mb-lg-0">
                                                <input type="text" className="form-control fsz-12px rounded-0 p-3" name="name" placeholder="Your Name *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control fsz-12px rounded-0 p-3" name="email" placeholder="Your Email *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-check mt-20">
                                                <input className="form-check-input" name="checkbox" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label fsz-12px" htmlFor="flexCheckDefault">
                                                    Save my name & email in this browser for next time I comment
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn bg-main text-white rounded-0 mt-40">
                                                <span className="fsz-11px">Submit Comment</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommentSection;
