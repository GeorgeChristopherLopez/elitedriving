import React from 'react';
import teen2 from '../img/teen-2.jpg';
import teen1 from '../img/teen-3.jpg';
import teen3 from '../img/driving-5.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// MEDIA QUERY
import { generateMedia } from 'styled-media-query';




function Splash() {
    return (
      
            <SplashDiv className="container">
            <div style={{ padding: '3rem 3rem 0rem'}} className="splash-text">
                <h5 style={{ fontSize: "2rem", margin: '1rem' }}> Get a perfect score on your driver  exam. </h5>
                <p style={{ fontSize: "1rem", margin: '1rem' }}> Streamline your driving exam and start shopping for decals and flashy license plates.</p>
                <button style={button}> <Link to="/quiz"> Take A FREE Practice Exam </Link></button>
                </div>
                <SplashImages className="splash-images">
                    <div style={{ display: "grid", gridTemplateColumns: "10rem 10rem", gridGap: '1.5rem', alignContent: "center" }}>
                        <img style={{ height: "25vh" }} src={teen2} alt={"teen-2"} />
                        <img style={{ height: "25vh" }} src={teen3} alt={"teen-2"} />
                      
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", alignContent: "center" }}>
                        <img style={{ height: "25vh", margin: '1rem 5rem', alignSelf: 'end' }} src={teen1} alt={"teen-2"} />
                    </div>
                    
                </SplashImages>
            </SplashDiv>
        

    );
}

export default Splash;

// MEDIA QUERY
const customMedia = generateMedia({
    lgDesktop: '1350px',
    mdDesktop: '1150px',
    tablet: '960px',
    smTablet: '740px'


});

const SplashDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    background: #eee;
  
    text-align: center;
    padding:10rem 1rem 10rem;
    margin: 0;
 ${customMedia.greaterThan('tablet')`
        grid-template-columns: 1fr 1fr; 
 padding: 10rem 5rem 5rem;

text-align: left;
    `}

`
const SplashImages = styled.div`
    display: none;
    padding: 0rem 3.5rem;
    ${customMedia.greaterThan('tablet')`
    display:grid;      
    `}
`



const button = {
    background: 'var(--main-color)',
    color: 'var(--light)',
    fontWeight: '750',
    borderRadius: '1.5rem',
    width: '15rem',
    height: '2.5rem',
    textAlign: 'center',
    border: 'none',
    fontSize: '1rem',
    margin: '1rem',

}