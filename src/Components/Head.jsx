import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logoNav.png'
import { Link } from 'react-router-dom';


const Head = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" style={{ position: "sticky", top: "0", zIndex: "1", borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px" }} id='home'>
        <Container>
          <Navbar.Brand className='brand'><Link to='/'><img style={{ width: "80px", height: "70px" }} src={Logo} alt='logo' /></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav className='HeadLink'>
              <Link to='/'>Home</Link>
              <Link to="about">About</Link>
              <Link to="features" >Features</Link>
              <Link to="privacy">Privacy Policy</Link>
              <Link to="terms">Terms and Conditions</Link>
            </Nav>
            <button className='btnnew'><Link to='https://rohitraj-put.github.io/Tic-tac-toe/' target='_blank' rel="noreferrer">Download</Link></button>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </>
  )
}

export default Head