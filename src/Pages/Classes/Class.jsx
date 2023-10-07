import React from 'react';

const Class = ({ card }) => {
    const { id, photo, title, details, class_time } = card

    return (
        <div className='p-4 flex flex-col'>
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