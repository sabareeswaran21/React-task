import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
export default function Page6(){
    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 mt-5 text-center text-primary'>
                    <h1>Our Portfolio</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12 text-center mt-3'>
                    <p>A Comment is a flexible format,  the scientific, commercial, ethical, legal, societal, or political issues surrounding research. Comment articles should be topical, readable, provocative and introduce new concepts/points of view, providing a personal perspective on a matter of public or scientific importance.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6'>
                <Navbar expand='lg' r1>
                    <Navbar.Brand href='#'>
                        <Navbar.Toggle area-control='basic-navbar-nav'/>
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='me-auto'>
                                <Nav.Link href='#' className='text-primary'>ALL</Nav.Link>
                                <Nav.Link href='#' className='text-primary'>WEB DEVELOPMENT</Nav.Link>
                                <Nav.Link href='#' className='text-primary'>GAME DEVELOPMENT</Nav.Link>
                                <Nav.Link href='#' className='text-primary'>APP DEVELOPMENT</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar.Brand>
                </Navbar>
                </div>
                <div className='col-lg-3'></div>
            </div>
        </div>
        </>
    )
}