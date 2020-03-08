import React from 'react';


function Testimonials() {
    return (
        <section className="testimonials">
            <h5 style={{ color: '#eee', fontSize: "2rem", margin: '1rem auto', textAlign: "center" }}> Students Who Used Elite Driving </h5>
            <div className="container">
                <div className="row">

                    <div className="col-xs-12 col-md-3" id="box">
                        <div id="review-1"><h4>There Great!</h4></div>
                        <div id="review-btn"><p>Review</p></div>
                    </div>

                    <div className="col-xs-12 col-md-3" id="box">
                        <div id="review-2"><h4>There Great!</h4></div>
                        <div id="review-btn"><p>Review</p></div>
                    </div>

                    <div className="col-xs-12 col-md-3" id="box">
                        <div id="review-3"><h4>There Great!</h4></div>
                        <div id="review-btn"><p>Review</p></div>
                    </div>

                    <div className="col-xs-12 col-md-3" id="box">
                        <div id="review-4"><h4>There Great!</h4></div>
                        <div id="review-btn"><p>Review</p></div>
                    </div>

                </div>
            </div>


        </section>

        
        
        );
}

export default Testimonials;