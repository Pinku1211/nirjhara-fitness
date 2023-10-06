import React from 'react';

const Pricing = () => {
    return (
        <div className="bg-[#f7f2eb]">
            <div className="flex flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <img src="https://scrippsamg.com/wp-content/uploads/2023/02/Top_Spots_in_San_Diego_for_Sunset_Yoga_1.jpg" className="h-full" />
                </div>
                <div className='flex-1 py-10 lg:py-24 pl-4 lg:pl-24'>
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Services and Pricing!</h1>
                    <div>
                        <p className="py-6">We provide variety of other activities, such as meditation sessions, nutrition workshops, or fitness classes.</p>
                        <p className="py-6">We have also special guest and speakers on every special session.</p>
                        <p>Standard Pricing Plan $35Per week</p>
                        <p>Professional Pricing Plan $120Per week</p>
                        <p className='mb-8'>Private Pricing Plan $250Per week</p>
                    </div>
                    <button className="btn rounded-full border-none text-black font-thin text-xs drop-shadow-md">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;