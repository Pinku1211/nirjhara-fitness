import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
const Root = () => {
    return (
        <div>
            <div className='sticky top-0 z-20'>
                <Navbar></Navbar>
            </div>
            <div className='z-10'>
                <Outlet />
            </div>
        </div>
    );
};

export default Root;






