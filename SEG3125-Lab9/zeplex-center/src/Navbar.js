import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from "react";
import RegisterModal from './RegisterModal';

const NavBar = ({language}) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <Navbar className="colour-nav" collapseOnSelect expand="lg"  variant="dark">
            
            <Navbar.Brand as={Link} to="/">{language == "English" ? "Zeplex Sporting Centre" : "Zeplex Centre sportif"}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/">{language == "English" ? "Home" : "Page d'accueil"}</Nav.Link>
                <Nav.Link as={Link} to="/basketball">{language == "English" ? "Basketball" : "Basketball"}</Nav.Link>
                <Nav.Link as={Link} to="/badminton">{language == "English" ? "Badminton" : "Badminton"}</Nav.Link>
                <Nav.Link as={Link} to="/feedback">{language == "English" ? "Feedback" : "Réactions"}</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                <button className="button" onClick={() => setModalShow(true)}>
                    {language == "English" ? "Register" : "S'inscrire"}
                </button>

                <RegisterModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}/>
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
    );
}
 
export default NavBar;