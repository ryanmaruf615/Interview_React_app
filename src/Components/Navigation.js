import React, {Fragment} from 'react';
import { Nav, Navbar, NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";


function Navigation (){

        return (
            <Fragment>
                <title>Blood Donation Center</title>
                <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" >
                    <Navbar.Brand ><NavLink><Link to="/">Maruf Web Site</Link></NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav >
                            <Nav.Link>   <NavLink> <Link to="/">Home</Link></NavLink> </Nav.Link>
                            <Nav.Link>   <NavLink> <Link to="/service">SERVICES</Link></NavLink> </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </Fragment>
        );
    }


export default Navigation;