import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

const Trainers = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='py-20 px-8 lg:px-24'>
            <h1 className="text-4xl font-bold text-center mb-8">Trainers of Trainers</h1>
            <h1 className='text-2xl font-semibold text-center mb-8'>We also provide the training session for the trainers</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className="outline outline-[#f7f2eb] rounded-2xl" data-aos="flip-left">
                    <div>
                        <img className='rounded-t-2xl lg:h-[260px] w-full' src="https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg" alt="Album" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Raj Sharma</h2>
                        <p>Yoga and Meditation Coach</p>
                        <h1 className='text-xl font-semibold'>Schedule</h1>
                        <p>Tuesday: 6:30 AM - 7:45 AM - Sunrise Meditation and Yoga <br />
                            Saturday: 9:30 AM - 10:45 AM - Mindful Yoga and Meditation</p>
                    </div>
                </div>
                <div className="outline outline-[#f7f2eb] rounded-2xl" data-aos="flip-left">
                    <div>
                        <img className='rounded-t-2xl lg:h-[260px] w-full' src="https://media.licdn.com/dms/image/C5612AQEKbLUQP9dj8g/article-cover_image-shrink_720_1280/0/1556200267664?e=2147483647&v=beta&t=frAvsnsr7V6DEo029SRR-yj6tviWe0Oz1A99OI-C4vA" alt="Album" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title"> Emily Brown</h2>
                        <p>Prenatal and Postnatal Yoga Coach</p>
                        <h1 className='text-xl font-semibold'>Schedule</h1>
                        <p>Monday: 10:00 AM - 11:15 AM - Prenatal Yoga <br />
                        Wednesday: 3:30 PM - 4:45 PM - Postnatal Yoga</p>
                    </div>
                </div>
                <div className="outline outline-[#f7f2eb] rounded-2xl" data-aos="flip-left">
                    <div>
                        <img className='rounded-t-2xl lg:h-[260px] w-full' src="https://omyogainternational.com/wp-content/uploads/2023/02/Benifits-of-500-Yoga-Teacher-Training-Programe.jpg" alt="Album" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Sarah Smith</h2>
                        <p>Yoga Challenge Instructor</p>
                        <h1 className='text-xl font-semibold'>Schedule</h1>
                        <p>Monday: 7:00 AM - 8:15 AM - Vinyasa Flow <br />
                        Friday: 9:00 AM - 10:15 AM - Gentle Yoga</p>
                    </div>
                </div>
                <div className="outline outline-[#f7f2eb] rounded-2xl" data-aos="flip-left">
                    <div>
                        <img className='rounded-t-2xl lg:h-[260px] w-full' src="https://hips.hearstapps.com/hmg-prod/images/281/articles/2017/09/sized-janice-yoga-teacher-1-1506731466.jpg?resize=640:*" alt="Album" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">John Eden</h2>
                        <p>Certified Yoga Instructor</p>
                        <h1 className='text-xl font-semibold'>Schedule</h1>
                        <p>Tuesday: 7:00 AM - 8:15 AM  <br />
                        Friday: 9:00 AM - 10:15 AM </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Trainers;