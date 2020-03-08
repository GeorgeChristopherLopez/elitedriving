import React from 'react';
import filler from '../img/filler.jpg';
import styled from 'styled-components';

// MEDIA QUERY
import { generateMedia } from 'styled-media-query';



function QuizSplash() {
    return (
        <section className="quizsplash-section">
            <QuizSplashComponent className="container">
                <div style={{ padding: '1rem' , textAlign: "center" }}>
                    <h5 style={{ color: "var(--secondary-color)", fontSize: "2rem", margin: '1rem' }}>Master the written test for your CDL </h5>
                    <p style={{ fontSize: "1rem", margin: '1rem' }}>Elite Driving's FREE practice test lets you get hands on experience in a parallel testing format to the official DMV Written Exam. 50 Multiple Choice Questions randomize from a quiz bank of 100.
                 It shouldn't be a mystery on what to study so our test covers the subjects you need to know at every level. Saving you time in your CDL prep.</p>
                </div>
                <div style={{ textAlign: "center" }} ><img style={{ width: "65%" }} src={filler} alt={"filler"} /></div>
            </QuizSplashComponent>
        </section>
    );
}

export default QuizSplash;


// MEDIA QUERIES
const customMedia = generateMedia({
    lgDesktop: '1440px',
    smDesktop: '1024px',
    tablet: '960px',
    smTablet: '740px'


});


const QuizSplashComponent = styled.div`
    display: grid;
   
    grid-template-columns: 1fr;
            padding: 5rem 2.5rem ;
 ${customMedia.greaterThan('tablet')`
    grid-template-columns: 1fr 1fr;  
    `}
`;
