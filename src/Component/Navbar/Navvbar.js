import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navvbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand className=''>
                    <div className='d-flex'>
                        <img src="favicon.ico" alt="" width="60" height="60" />
                        <h2 className='mx-3 mt-2 fw-bold'>MD. ROBIUL ISLAM</h2>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 mx-5"
                        style={{ maxHeight: '150px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Nav>
                        <Link className='me-2 my-1 ' to='/'><Button>Home</Button></Link>
                        <Link className='me-2 my-1 ' to='/about'><Button>About Me</Button></Link>
                        <Link className='me-2 my-1 ' to='/blog'><Button>Blog</Button></Link>
                        <Link className='me-2 my-1 ' to='/contact'><Button>Connect us</Button></Link>
                        <Link className='me-2 my-1 ' to='/resume'><Button>My Resume</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navvbar;