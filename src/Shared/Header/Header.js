import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <header>
            <Navbar collapseOnSelect className='shadow-sm' fixed="top" expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={40} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link  href="home#banner">Banner</Nav.Link>
                            <Nav.Link  href="home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/footer">Footer</Nav.Link>
                            <Nav.Link as={Link} to="/about">About me</Nav.Link>
                            {user?.uid ? <button onClick={handleSignOut} className='btn btn-info text-white'>Log Out</button> : <Nav.Link as={Link} to="/login">Login</Nav.Link> }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;