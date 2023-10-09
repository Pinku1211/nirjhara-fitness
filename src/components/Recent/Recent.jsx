import React from 'react';

const Recent = () => {
    return (
        <div className="bg-[#f7f2eb]">
            <div className="flex flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <img src="https://scrippsamg.com/wp-content/uploads/2023/02/Top_Spots_in_San_Diego_for_Sunset_Yoga_1.jpg" className="h-full" />
                </div>
                <div className='flex-1 py-5 lg:py-16 pl-4 lg:pl-24'>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Services We Did recently</h1>
                    <h1 className='text-2xl'>We have conducted around more than 200 events in this year!</h1>
                    <div>
                        <h1 className='text-xl font-semibold'>Our three recent event are:</h1>
                        <ol>
                            <li>Yoga Retreats or Day Trips</li>
                            <li>A Guest Speaker Events</li>
                            <li>A charity Yoga Event</li>
                        </ol>
                    </div>
                    <div className='mt-3'>
                        <p className="py-1">We provide variety of other activities, such as meditation sessions, nutrition workshops, or fitness classes.</p>
                        <p className="py-1">We have also special guest and speakers on every special session.</p>
                        <p>Standard Pricing Plan $35Per week</p>
                        <p>Professional Pricing Plan $120Per week</p>
                        <p className='mb-8'>Private Pricing Plan $250Per week</p>
                    </div>
                    <button className="btn rounded-full border-none text-black font-thin text-xs drop-shadow-md">Visit Our Classes</button>
                </div>
            </div>
        </div>
    );
};

export default Recent;