import React from 'react';
import './Header.css'
import LogoImg from '../../../images/logo.png'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import xw from "xwind";


export default function Header() {
    const loginUser = localStorage.getItem("loginUser")
    const history = useHistory();

    const handleLogOut = () => {
        console.log("header", loginUser);
        localStorage.removeItem("loginUser")
        history.push('/login')
    }


    return (
        <Navbar expand="lg">
            <Container>
                <NavbarBrand href="#"> <img src={LogoImg} alt="header logo" /></NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav><Link to='/home'>Home</Link></Nav>

                        <Nav><Link to='/aboutUs'>About Us</Link></Nav>

                        <Nav><Link to='/ourservices'>Our Services</Link></Nav>
                        {loginUser !== null ?
                            <Nav><Link to='/portfolio'>Portfolio</Link></Nav> : null
                        }
                        {loginUser !== null ?
                            <Nav><Link to='/careers'>Careers</Link></Nav> : null
                        }
                        <Nav><Link to='/contact'>Contact Us</Link></Nav>

                        {loginUser === null ?
                            <Nav><Link to='/registration'>Registration</Link></Nav> : null
                        }
                        {loginUser === null ?
                            <Nav><Link to='/login'>Login</Link></Nav> : <Nav><Link to='/login' onClick={handleLogOut}>Logout</Link></Nav>
                        }
                    </Nav>
                </Navbar.Collapse>
                <div className="response">
                    <h6>Free Estimation</h6>
                    <span>Response in 24 Hours</span>
                </div>
            </Container>
        </Navbar>
    )
}
