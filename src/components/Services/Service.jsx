import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"

const Service = ({ card }) => {
    useEffect(() => {
        Aos.init()
    }, [])

    const { id, photo, service_name, details } = card

    return (
        <div className='p-4' data-aos="slide-left">
            <div className='flex justify-center mb-10'>
                <img className='rounded-full h-[270px] w-[270px]' src={photo} alt="" />
            </div>
            <h1 className="text-2xl font-semibold">{service_name}</h1>
            <p>{details.slice(0, 70)}...</p>
            <Link to={`/details/${id}`}>
                <div className='flex justify-center mt-4'>
                    <button className="outline-white px-4 py-2 rounded-lg hover:bg-[#ff6969] hover:text-white border border-[#ff6969] text-[#ff6969]">Show More</button>
                </div>
            </Link>
        </div>
    );
};

export default Service;