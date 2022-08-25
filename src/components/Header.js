import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
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
                                <NavLink className="active">Home</NavLink>
                                :<NavLink href="/">Home</NavLink>
                            }
                        </NavItem>
                        <NavItem>
                            {
                                pythonPage?
                                <NavLink className="active">Python</NavLink>
                                :<NavLink href="/python">Python</NavLink>
                            }
                        </NavItem>
                        <NavItem>
                            {
                                javaPage?
                                <NavLink className="active">Java</NavLink>
                                :<NavLink href="/java">Java</NavLink>
                            }
                        </NavItem>
                        <NavItem>
                            {
                                mernPage?
                                <NavLink className="active">MERN</NavLink>
                                :<NavLink href="/mern">MERN</NavLink>
                            }
                        </NavItem>
                        <NavItem>
                            {
                                projectPage?
                                <NavLink className="active">Projects</NavLink>
                                :<NavLink href="/projects">Projects</NavLink>
                            }
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};
export default Header;