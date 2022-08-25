import { Link } from "react-router-dom";
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

const Header = props => {
    const { homePage, pythonPage, javaPage, mernPage, projectPage } = props;

    // Navbar controls
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)

    return (
        <div
            className="navbar navbar-expand-sm navbar-light bg-light border border-secondary rounded ps-3 pe-3 mb-5"
        >
            <Navbar style={{ width: "100%" }}>
                <NavbarBrand className="fs-2">Caleb M. Rank</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="justify-content-end" style={{ width: "100%" }} navbar>
                        <NavItem>
                            {
                                homePage?
                                <Link className="active">Home</Link>
                                :<Link to="/">Home</Link>
                            }
                        </NavItem>
                        <NavItem>
                            {
                                pythonPage?
                                <Link className="active">Python</Link>
                                :<Link to="/python">Python</Link>
                            }
                        </NavItem>
                        <NavItem>
                            {
                                javaPage?
                                <Link className="active">Java</Link>
                                :<Link to="/java">Java</Link>
                            }
                        </NavItem>
                        <NavItem>
                            {
                                mernPage?
                                <Link className="active">MERN</Link>
                                :<Link to="/mern">MERN</Link>
                            }
                        </NavItem>
                        <NavItem>
                            {
                                projectPage?
                                <Link className="active">Projects</Link>
                                :<Link to="/projects">Projects</Link>
                            }
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};
export default Header;