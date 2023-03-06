import React from 'react' 
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import { Link } from "react-router-dom"; 


const Header = (props) => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid style={{ letterSpacing: "0px" }}>
                    <Navbar.Brand style={{ color: "Tomato" }} href="#">{props.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className="nav-link" to="/">Project-Expenses</Link> 
                        </Nav> 
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </>
    )
}
export default Header


