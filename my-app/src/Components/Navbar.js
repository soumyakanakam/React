import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link href="a" className="brand-logo">
                    Logo
                </Link>
                <ul id="nav-mobile" className="right ">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;