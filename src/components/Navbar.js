import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className="header">
            <h1 id="brand">
                <Link to="/">Welccome To BrainHive!</Link>
            </h1>
            <div id="navigation">
                <button>
                    <Link to="/add">Add Post</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;