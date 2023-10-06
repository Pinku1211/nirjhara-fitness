import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../public/yoga.png"

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/schedule">Schedule</NavLink></li>
        <li><NavLink to="/store">Store</NavLink></li>
        <li><NavLink to="/login">Log In</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 my-10 lg:px-32">
            <div className="navbar-start lg:justify-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={logo} alt="" />
                    <h1 className='text-4xl font-bold'>Nirjhara</h1>
                </div>
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-md">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end">
                <Link to='/login'><button className='btn bg-transparent outline'>Log in</button></Link>
            </div>

        </div>
    );
};

export default Navbar;