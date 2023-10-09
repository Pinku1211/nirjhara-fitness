import React from 'react';
import swal from 'sweetalert';
const Booking = () => {

    return (
        <div className="hero min-h-screen bg-[#f7f2eb] py-10 px-8 lg:px-24">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-center text-[#ff6969] font-bold">Reserve now to Get Our Latest Services!</h1>
                    <p className="py-6 text-center text-2xl font-semibold">We are one click away!</p>
                </div>
                <div className="card w-full bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Event Name</span>
                            </label>
                            <input type="text" placeholder="Event name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact No.</span>
                            </label>
                            <input type="text" placeholder="contact" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Address</span>
                            </label>
                            <input type="text" placeholder="Your Address" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#ff6969] text-white">SEND TO RESERVE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;