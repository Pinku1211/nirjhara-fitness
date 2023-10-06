import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
const Root = () => {
    return (
        <div>
            <div className='sticky top-0'>
                <Navbar></Navbar>
            </div>
            <div className=''>
                <Outlet />
            </div>
        </div>
    );
};

export default Root;






