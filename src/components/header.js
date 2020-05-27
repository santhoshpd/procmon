import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/gatsby-icon.png'
import {Container,Nav,Navbar} from 'react-bootstrap'

const Header = ({ siteTitle }) => (
  <header className="sticky pt-0 mt-0 shadow border">
    <Container>
        <Navbar expand="md">
          <Navbar.Brand href="/"><img
              alt="Not known"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"/>&nbsp;
            {siteTitle}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive"/>
          <Navbar.Collapse id="navbarResponsive">
            <Nav as="ul" className="ml-auto py-2 px-8">
              <Nav.Item as="li" className="px-4">
                <Link  className="nav-link text-primary" activeClassName="active text-blue" to="/about">About</Link>
              </Nav.Item>
              <Nav.Item as="li" className="px-4">
                <Link  className="nav-link text-primary" activeClassName="active" to="/pricing">Pricing</Link>
              </Nav.Item>
              <Nav.Item as="li" className="px-4">
                <Link  className="nav-link text-primary " activeClassName="active" to="/docs">Docs</Link>
              </Nav.Item>
              <Nav.Item as="li" className="px-4">
                <Link  className="nav-link" activeClassName="active" to="/register"><button className="btn btn-primary">SignUp</button></Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </Container>   

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;

 
