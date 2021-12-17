import React from 'react';
import {Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Login from '../WaxLogin';
import { useSelector } from 'react-redux';

export function BootStrapNavbar(){
    const userAccount = useSelector(state => state.global.user)
    const NavBar = () => (
        //<div>
           // <div>
                <Navbar bg="black"  variant="dark" >
                <Container fluid>
                        <Navbar.Brand as={Link} to="/" className="brand">
                            <img
                                alt=""
                                src="https://gateway.pinata.cloud/ipfs/QmUZhMHXBA2q3rRZYkcL5jaoXYizoHH9bxfCPEZWNsT2Cu"
                                width="60"
                                height="60"
                                className="d-inline-block align-top"
                            />{' '}
                            Mythics Guild Dollars Portal                
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/DC">DC Bets</Nav.Link>
                                <Nav.Link as={Link} to="/Slots">MG$ Slots</Nav.Link>
                                <Nav.Link as={Link} to="/Swap">MG$ Swap</Nav.Link>
                                <Nav.Link href="https://mythicsg.webflow.io/">Mythics Guild</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text >
                            <Login/>
                            Signed in as: <Nav.Link as={Link} to="/Account" id="accountName" > {userAccount} </Nav.Link>
                        </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
           // </div>
        //</div>
    );
    return(<NavBar/>)
}

const NavBar = () =>(
    BootStrapNavbar()
)

export default NavBar;