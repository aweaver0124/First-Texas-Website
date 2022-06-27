import React from "react";
import first_texas_logo  from "./images_ft/first_texas_logo.jpg";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <img id="ft_logo" src={first_texas_logo} alt="first texas logo" />
            <nav>
                <Link className="nav-button" to="/">
                     HOME 
                </Link>
                
                <Link className="nav-button" to="/services"> 
                    SERVICES   
                </Link>
                <Link className="nav-button" to="/gallery">
                    GALLERY
                </Link>
                <Link className="nav-button" to="/about">
                     ABOUT US
                </Link>
                <Link className="nav-button" to="/contact">
                     CONTACT US 
                </Link>
                <Link className="nav-button" to="/inspection">
                     FREE INSPECTION 
                </Link>
            </nav>
        </header>
    )
}

export default Header;