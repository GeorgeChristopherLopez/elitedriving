import React from 'react';
import styled from 'styled-components';
import { MdDehaze } from 'react-icons/md';
import { Link } from 'react-router-dom';


// MEDIA QUERY
import { generateMedia } from 'styled-media-query';

function Header() {
    return (
        <div style={{ position: "fixed", width: "100%"}}>
            <HeaderComponent className="header">
                <div style={{ color: "var(--main-color)", fontFamily: "'Oswald', sans-serif", fontSize: "1.5rem", padding: "1rem 0rem" }} className="logo">
                    <h3><Link style={{ color: "var(--main-color)" }} to="/">ELITE DRIVING</Link></h3>
            </div>

                <MobileNav> <MdDehaze style={iconStyle} />
                    <DropdownDiv className="dropdown-content">
                    <ul>
                        <li><Link to="/quiz">Practice</Link></li>
                        <li>Services</li>
                        <li>Guides</li>
                        <li>Contact Us</li>
                        <li >Login</li>
                        <li >Sign Up</li>


                        </ul>
                    </DropdownDiv>
                </MobileNav>


            <DesktopNav className="desktop-nav" >
                
                    <li><Link  to="/quiz">Practice</Link></li>
                <li>Services</li>
                <li>Guides</li>
                <li>Contact Us</li>
                <li style={loginButton}>Login</li>
                <li style={signupButton}>Sign Up</li>
            </DesktopNav>


            </HeaderComponent>
    </div>
    );
}

export default Header;



// MEDIA QUERY
const customMedia = generateMedia({
    lgDesktop: '1350px',
    mdDesktop: '1150px',
    tablet: '960px',
    smTablet: '740px'


});



const HeaderComponent = styled.header`
  
    background: var(--secondary-color);
    display: grid;
    grid-template-columns: 1fr  1fr;
    padding: 1.25rem;
    ${customMedia.greaterThan('tablet')`
     grid-template-columns: 1fr  2fr;
    `}
`
const MobileNav = styled.ul`
    display: gird;
    text-align: right;
    padding: 1rem 2rem 2rem 0rem;
   &:hover .dropdown-content {
            display: block;
        }
    ${customMedia.greaterThan('tablet')`
    display:none;      
    `}
`

const DropdownDiv = styled.div`
    position: absolute;
    display: none;
     background: var(--secondary-color);
    width: 15rem;
    right: 0;
    text-align: center;

   
    ${customMedia.greaterThan('tablet')`
    display:none;      
    `}
`
const iconStyle = {
    fontSize: '3rem',
    textAlign: 'right',
    color: 'white'

}

const DesktopNav = styled.ul`
    display: none;
    grid-template-columns: repeat(6, 1fr);
    padding: 1.5rem 1rem;
    justify-self: end;
    grid-gap: 1.0rem;
    align-self: right;
    ${customMedia.greaterThan('tablet')`
    display:grid;      
    `}
`


const loginButton = {
    background: 'var(--main-color)',
    borderRadius: '1.5rem',
    width: '6rem',
    height: '2.5rem',
    textAlign: 'center'
}

const signupButton = {
    background: 'var(--light)',
    color: 'var(--main-color)',
    borderRadius: '1.5rem',
    width: '6rem',
    height: '2.5rem',
    textAlign: 'center'
}
