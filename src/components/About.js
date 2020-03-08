import React from 'react';

import styled from 'styled-components';
import driving6 from "../img/driving-6.jpg";
import drivinginstructor from "../img/driving-instructor.jpg";
// MEDIA QUERY
import { generateMedia } from 'styled-media-query';



function About() {
    return (
        <section className="about-section">
            <AboutDiv className="container">

                <div style={{ textAlign: "center" }} ><img style={{ width: "75%" }} src={driving6} alt={"filler"} /></div>
                <div style={{ padding: '2rem 5rem', textAlign: "center" }}>
                    <h5 style={{ color: "var(--secondary-color)", fontSize: "2rem", margin: '1rem' }}>Our Mission </h5>
                    <p style={{ fontSize: "1rem", margin: '1rem' }}>Elite Driving's FREE practice test lets you get hands on experience in a parallel testing format to the official DMV Written Exam. 50 Multiple Choice Questions randomize from a quiz bank of 100.
                 It shouldn't be a mystery on what to study so our test covers the subjects you need to know at every level. Saving you time in your CDL prep.</p>
                </div>
            </AboutDiv>
            <AboutDiv style={{ background: "#eee" }} className="container">
                <div style={{ padding: '2rem 5rem', textAlign: "center" }}>
                    <h5 style={{ color: "var(--secondary-color)", fontSize: "2rem", margin: '1rem' }}>Our Team</h5>
                    <p style={{ fontSize: "1rem", margin: '1rem' }}>Elite Driving's FREE practice test lets you get hands on experience in a parallel testing format to the official DMV Written Exam. 50 Multiple Choice Questions randomize from a quiz bank of 100.
                 It shouldn't be a mystery on what to study so our test covers the subjects you need to know at every level. Saving you time in your CDL prep.</p>
                </div>
                <div style={{ textAlign: "center" }} ><img style={{ width: "75%" }} src={drivinginstructor} alt={"filler"} /></div>
            </AboutDiv>
        </section>
    );
}

export default About;


// MEDIA QUERIES
const customMedia = generateMedia({
    lgDesktop: '1440px',
    smDesktop: '1024px',
    tablet: '960px',
    smTablet: '740px'


});


const AboutDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr;
            padding: 5rem 2.5rem;
 ${customMedia.greaterThan('tablet')`
    grid-template-columns: 1fr 1fr;  
    `}
`;
