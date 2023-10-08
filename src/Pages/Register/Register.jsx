import React, { useContext } from 'react';
import { AuthContext } from '../../components/Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { SiCardano } from "react-icons/si";

const Register = () => {

    const { createUser, logInWithGoogle } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password, name)

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignIng = () => {
        logInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <section className="bg-gray-50">
            <div className='flex justify-center py-10'>
                <SiCardano className='text-6xl text-[#FF6969]'></SiCardano>
            </div>
            <div className="px-4 pb-20 mx-auto max-w-7xl">
                <h1 className="mb-5 text-4xl font-bold text-left text-gray-800 sm:text-center">Register for free</h1>

                <div
                    className="w-full px-0 p-6 mx-auto mt-4 mb-0 space-y-4 bg-transparent border-0 border-gray-200 rounded-lg md:bg-white md:border sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 md:px-6 sm:mt-8 sm:mb-5"
                >
                    <form onSubmit={handleRegister} className="pb-1 space-y-4">
                        <label className="block">
                            <span className="block mb-1 text-md font-medium text-gray-700">Name</span>
                            <input className="form-input w-full p-2" type="text" name='name' placeholder="Your full name" required />
                        </label>
                        <label className="block">
                            <span className="block mb-1 text-md font-medium text-gray-700">Your Email</span>
                            <input className="form-input w-full p-2" type="email" name='email' placeholder="Ex. james@bond.com" inputmode="email" required />
                        </label>
                        <label className="block">
                            <span className="block mb-1 text-md font-medium text-gray-700">Create a password</span>
                            <input className="form-input w-full p-2" type="password" name='password' placeholder="••••••••" required />
                        </label>
                        <div className="flex flex-col items-start justify-between sm:items-center sm:flex-row">
                            <label className="flex items-center">
                                <input type="checkbox" name='checkbox' className="form-checkbox" />
                                <span className="block ml-2 text-md font-medium text-gray-700 cursor-pointer">Agree to Privacy Policy</span>
                            </label>
                            <input type="submit" className="w-full mt-5 outline-white px-4 py-2 rounded-lg hover:bg-[#ff6969] hover:text-white border border-[#ff6969] text-[#ff6969] sm:w-auto sm:mt-0" value="Register" />
                        </div>
                    </form>
                </div>
                <div className='max-w-fit mx-auto'>
                    <a onClick={handleGoogleSignIng} href="#" className="w-full py-3 btn btn-icon btn-google">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                            <path
                                d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z"
                            />
                        </svg>
                        Continue with Google
                    </a>
                </div>

                <p className="my-4 text-md font-medium text-center text-gray-700 sm:my-5">
                    Already have an account?
                    <Link to='/login'><span className='ml-3 text-[#ff6969]'>Login</span></Link>
                </p>

            </div>
        </section>

    );
};

export default Register;