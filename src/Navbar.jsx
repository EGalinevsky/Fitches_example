import React from 'react'

const Navbar = (props) => {
    return (
        <nav className="navbar">
            1
            <ul className="navbar-nav">
                {props.children}
            </ul>
        </nav>
    )
}

export default Navbar
