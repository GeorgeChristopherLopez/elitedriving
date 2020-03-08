import React from 'react';
import { FaCar, FaAddressCard, FaChalkboardTeacher} from 'react-icons/fa';
import styled from 'styled-components';

// MEDIA QUERY
import { generateMedia } from 'styled-media-query';



function Services() {
    return (
        <section className="services-section" style={{ background: "#eee"}}>
            <div className="services-header" style={{ padding: '2rem 5rem', textAlign: "center" }}>
                <h5 style={{ color: "var(--secondary-color)", fontSize: "2rem", margin: '0rem' }}>How It Works </h5>
                <p style={{ fontSize: "1rem", padding: "3rem ", margin: "0rem" }}  >Elite Driving has a large variety of classes and service for people at stages of pursing a drivers liscence. Whether you're getting your first license or brushing up your skills. Elite Driving has got you covered</p>
            </div>

            <ServiceDiv className="services">
                <div style={serviceCardStyle} className="service-card">
                    <FaChalkboardTeacher style={iconStyle} />
                    <p>Take a 10 module course that breaks down all aspects of the Written Exam. </p>
                    </div>
                <div style={serviceCardStyle} className="service-card">
                    <FaAddressCard style={iconStyle} />
                    <p>Take our FREE practice exam and nail your get your CDL Permit in record time. </p>
                </div>
                <div style={serviceCardStyle} className="service-card">
                    <FaCar style={iconStyle}/>
                    <p>Receive road test prep from our season driving instructors and access to road test exercises and drills. </p>
                </div>
            </ServiceDiv>
        </section>
    );
}

export default Services;
// MEDIA QUERY
const customMedia = generateMedia({
    lgDesktop: '1350px',
    mdDesktop: '1150px',
    tablet: '960px',
    smTablet: '740px'


});
const serviceCardStyle = {
    width: "320px",
    height: "200px",
    border: "solid 2px var(--secondary-color)",
    fontSize: "1rem",
    margin: "1rem auto",
    padding: "1rem"
}

const iconStyle = {
    fontSize: '3rem',
    textAlign: 'right',


}

const ServiceDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    background: #eee;
    padding: 2.5rem;

 ${customMedia.greaterThan('tablet')`
        grid-template-columns: 1fr 1fr 1fr;  
    `}

`