import React from 'react';

const Reason = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1533012562945-b003ce1d3269?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjB5b2dhfGVufDB8fDB8fHww&w=1000&q=80)' }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold">The Main Reason to Practice Yoga</h1>
                    <p className="mb-5">Yoga can help regulate emotions and reduce symptoms of anxiety and depression. It encourages a sense of calm and can improve your overall mood.</p>
                    <button className="btn rounded-full border-none text-black font-thin text-xs drop-shadow-md">Our Services</button>
    
                </div>
            </div>
        </div>
    );
};

export default Reason;