import React from 'react';

const Banner = () => {
    
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://elementsofbyron.com.au/wp-content/uploads/2018/09/First_Light_Club_Beachfront_Yoga_1350x1017.jpg)' }}>
                        <div className="hero-overlay bg-opacity-25"></div>
                        <div className="hero-content text-center text-neutral-content py-16">
                            <div className="space-y-12">
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Keeping Your Mind in Best Condition</h1>
                                <p className="mb-5 lg:text-md">Experience the power of healing yoga. Balance your body and mind with our center</p>
                                <button className="btn rounded-full bg-[#FF6969] border-none text-white font-thin text-xs">Make an Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/1357908618/photo/full-length-shot-of-an-attractive-young-woman-practising-yoga-on-the-beach.webp?b=1&s=170667a&w=0&k=20&c=0iYXzqmeoTclAwNrpQ4aytwnZ5vzc4eP6p4CyIow-34=)' }}>
                        <div className="hero-overlay bg-opacity-25s"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-12">
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Work on Your Spiritual Growth</h1>
                                <p className="mb-5 lg:text-md"> For those interested in spirituality, yoga offers a path for self-discovery and personal growth</p>
                                <button className="btn rounded-full bg-[#FF6969] border-none text-white font-thin text-xs">Make an Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://photos.tpn.to/tt/ql/nq/pl/653x490.jpg)' }}>
                        <div className="hero-overlay bg-opacity-0"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-12">
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Be Strong and get Better Posture</h1>
                                <p className="mb-5 lg:text-md">Yoga encourages body awareness and alignment, which can lead to improved posture.</p>
                                <button className="btn rounded-full bg-[#FF6969] border-none text-white font-thin text-xs">Make an Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='-mt-[60px]'>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;


