import React from 'react'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavBtn,
    NavBtnLink
} from "./NavbarElemets";


const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>

                    <NavLogo to="/">Smart Estate</NavLogo>


                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>

                        <NavLink >
                            <div className="navitem"> <Link to="/">Home</Link></div>
                        </NavLink>
                        <NavLink>
                            <div className="navitem">  <Link to="About">About</Link></div>
                        </NavLink>
                        <NavLink >
                            <div className="navitem"> <Link to="propertyList">Property List</Link></div>
                        </NavLink>

                        <NavLink>
                            <div className="navitem"> <Link to="commercial">Commercial</Link></div>
                        </NavLink>

                        <NavLink>
                            <div className="navitem"> <Link to="noncommercial"> Non-Commercial </Link> </div>
                        </NavLink>

                        <NavLink>
                            <div className="navitem"> <Link to='/RegisterProperty'> Register Property </Link></div>
                        </NavLink>

                        {/* <NavBtn>
                <Link to='/RegisterProperty'> Register Property </Link>
            </NavBtn> */}

                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
};

export default Navbar;
