import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const style = {
        background: "#ffd1dc",
    }
    return (
        <div className="navbar">
            <NavLink 
            exact to="/"
            activeStyle={style}
            >
                Home
            </NavLink>
            <NavLink 
            exact to="/dogs"
            activeStyle={style}
            >
                Dogs
            </NavLink>
            <NavLink
            exact to="/add-dog"
            activeStyle={style}
            >
                Add Dog
            </NavLink>
        </div>
    )
}

export default NavBar