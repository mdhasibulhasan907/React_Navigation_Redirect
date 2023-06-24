// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar=()=>{

    return <nav>
         <Link to="/">Home</Link>
         <Link to="/contact">Contact</Link>
         <Link to="/blogs">Blogs</Link>

    </nav>
        

}

export default Navbar;