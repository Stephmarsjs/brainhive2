import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className="header">
            <h1 id="brand">
                <Link to="/">Home</Link>
            </h1>

            <div id="navigation">
                    <Link to="/add">Add A Post</Link>
            </div>
        </div>
    );
};

export default Navbar;