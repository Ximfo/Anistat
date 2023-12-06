import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/'>HI</Link>
            <Link to='/add'>ADD</Link>
            <Link to='/list'>LIST</Link>
            <Link to='/stats'>STATS</Link>
        </div>
    );
};
