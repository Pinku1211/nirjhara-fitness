import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { SiCardano } from "react-icons/si";
import Class from './Class';

const Classes = () => {

    const cards = useLoaderData()

    return (
        <div className='text-center bg-[#f7f2eb] mt-[14px] py-24 px-8 lg:px-24 space-y-4'>
            <div className='flex justify-center'>
                <SiCardano className='text-6xl text-[#FF6969]'></SiCardano>
            </div>
            <p><small>WHAT WE DO</small></p>
            <h1 className='text-4xl font-semibold'>Our Classes</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-16'>
                {
                    cards.map(card => <Class key={card.id} card={card}></Class>)
                }
            </div>
        </div>
    );
};

export default Classes;