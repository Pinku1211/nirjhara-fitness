import React, { useEffect, useState } from 'react';
import { SiCardano } from "react-icons/si";
import Service from './Service';
const Services = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(result => result.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div className='text-center bg-[#f7f2eb] mt-[14px] py-24 px-8 lg:px-24 space-y-4'>
            <div className='flex justify-center'>
                <SiCardano className='text-6xl text-[#FF6969]'></SiCardano>
            </div>
            <p><small>WHO WE ARE</small></p>
            <h1 className='text-4xl font-semibold'>Our Main Services</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-16'>
                {
                    cards.map(card => <Service key={card.id} card={card}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;