import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
const Class = ({ card }) => {
    useEffect(()=>{
        Aos.init()
    }, [])
    const { id, photo, title, details, class_time } = card

    return (
        <div className='p-4 flex flex-col' data-aos="flip-left">
            <div className='flex justify-center mb-10'>
                <img className='rounded-full h-[270px] w-[270px]' src={photo} alt="" />
            </div>
            <h1 className="text-2xl font-semibold mb-6">{title}</h1>
            <div className=''>
                <p className='text-[#ff6969]'>{class_time}</p>
            </div>
        </div>
    );
};

export default Class;