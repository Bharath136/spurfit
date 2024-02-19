import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useNavigate } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scrollToSection = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    }
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate()

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Nav>
        <Logo>Ahead</Logo>
            <MobileIcon onClick={toggleNavbar} isOpen={isOpen}>
                <span></span>
                <span></span>
                <span></span>
            </MobileIcon>
            <NavMenu isOpen={isOpen}>
                <NavItem>
                    <ScrollLink
                        to="whyChooseUs"
                        smooth={true}
                        duration={500}
                        onClick={toggleNavbar}
                    >
                        Why Choose Us
                    </ScrollLink>
                </NavItem>
                <NavItem>
                    <ScrollLink
                        to="ourServices"
                        smooth={true}
                        duration={500}
                        onClick={toggleNavbar}
                    >
                        Our Services
                    </ScrollLink>
                </NavItem>
                <NavItem>
                    <ScrollLink
                        to="aboutUs"
                        smooth={true}
                        duration={500}
                        onClick={toggleNavbar}
                    >
                        About Us
                    </ScrollLink>
                </NavItem>
                <NavItem>
                    <ScrollLink
                        to="contactUs"
                        smooth={true}
                        duration={500}
                        onClick={toggleNavbar}
                    >
                        Contact Us
                    </ScrollLink>
                </NavItem>
                <NavItem style={{backgroundColor:'white', padding:'10px 20px'}}>
                    <Link
                        to="/"
                        style={{textDecoration:'none', color:'#000'}}
                    >
                        Login
                    </Link>
                </NavItem>
            </NavMenu>
        </Nav>
    );
};

const Nav = styled.nav`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--main);
  color: #fff;
  ${'' /* position:fixed; */}
  min-height:12vh;
  width:100%;
  padding: 1em 2em;

  @media screen and (max-width: 768px) {
    padding: 1em;
  }
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const MobileIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #fff;
    margin: 3px 0;
    transition: 0.4s;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    animation: ${fadeIn} 0.5s ease;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-90deg)' : 'initial')};
    span:nth-child(1) {
      transform: ${({ isOpen }) =>
        isOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'initial'};
    }
    span:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
    }
    span:nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'initial'};
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: var(--main);
    color: #fff;
  }
`;

const NavItem = styled.span`
  margin: 0 1em;
  cursor: pointer;
  font-weight: bold;
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }

  @media screen and (max-width: 768px) {
    margin: 1em 0;
  }
`;

export default Navbar;
