import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ShowMore = () => {

    const { id } = useParams();
    const cards = useLoaderData();

    const selectedCard = cards.find(card => card.id == id)
    console.log(selectedCard.service_name)
    console.log(selectedCard)
    return (
        <div className=" bg-[#f7f2eb] pb-10">
            <figure><img className='h-[500px] w-full' src={selectedCard.photo} alt="Shoes" /></figure>
            <div className="space-y-8 mt-8 px-8 lg:px-24">
                <h2 className="card-title text-4xl font-bold">{selectedCard.service_name}</h2>
                <p className='text-lg'>{selectedCard.details}</p>
                <div className="card-actions justify-center my-10">
                    <Link to='/booking'><button className="outline-white px-4 py-2 rounded-lg hover:bg-[#ff6969] hover:text-white border border-[#ff6969] text-[#ff6969]">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ShowMore;