import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';



const Head = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" style={{ position: "sticky", top: "0", zIndex: "1",borderBottomLeftRadius: "30px",borderBottomRightRadius: "30px" }} id='home'>
        <Container>
          <Navbar.Brand className='brand'><img style={{width:"80px",height:"70px"}} src='https://gogil.aimcomely.com/webassets/images/logo.png'/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <NavLink href='/'>Home</NavLink>
              <NavLink href="features" >Features</NavLink>
              <NavLink href="about">About</NavLink>
              <NavLink href="privacy">Privacy Policy</NavLink>
              <NavLink href="terms">Terms and Conditions</NavLink>
            </Nav>
            <button className='btnnew'><a href='https://rohitraj-put.github.io/Tic-tac-toe/' target='_blank'>Download</a></button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Head