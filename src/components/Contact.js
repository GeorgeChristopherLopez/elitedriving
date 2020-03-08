import React from 'react';


function Contact() {
    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div id="brand" className="col-xs-12 col-lg-3">
                        <h4 style={{
                            fontFamily: 'Oswald, sans-serif'
                        }}>ELITE DRIVING</h4>
                        <p>Making your driving, Elite.</p>
                    </div>
                    <div id="newsletter" className="col-xs-12 col-lg-3">
                        <h4>Newsletter</h4>
                        <p>
                            Stay up to date on the latest Elite Driving news and tips. Be the first to learn about discounts and new programs.
                    </p>
                        <div className="input-bar">
                            <input type="email" />
                            <p href="#" className="btn-subscribe">Subscribe</p>
                        </div>
                    </div>
                    <div id="links" className="col-xs-12 col-lg-3">
                        <ul>
                            <li>Useful Links</li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Vehicles</a></li>
                            <li><a href="#">Guides</a></li>
                            <li><a href="#">Practice Exam</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div id="address" className="col-xs-12 col-lg-3">
                        <p>Contact Us</p>
                        <address>303 Trinity St.<br/> Los Angelus CA<br/> United States </address>
                </div>
            </div>
                    </div>

        </section>

    );
}

export default Contact;