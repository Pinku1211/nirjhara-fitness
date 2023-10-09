import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/Provider/AuthProvider';
import { SiCardano } from "react-icons/si";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import swal from 'sweetalert';

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [logInError, setLogInError] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')

        setLogInError('');
        signIn(email, password)
        .then(result => {
            console.log(result.user)
            swal("Nirjhara", "Logged in successfully!");
            navigate(location?.state ? location.state : "/")
        })
        .catch(error=> {
            console.error(error);
            setLogInError(error.message);

        })
    }

    return (
        <section className="bg-gray-50">
            
            <div className='flex justify-center py-10'>
                <SiCardano className='text-6xl text-[#FF6969]'></SiCardano>
            </div>
            <div className="px-4 pb-20 mx-auto max-w-7xl">
                <h1 className="mb-5 text-4xl font-bold text-left text-gray-800 sm:text-center">Login to Start Now!</h1>
                <div
                    className="w-full px-0 pt-5 pb-6 mx-auto mt-4 mb-0 space-y-4 bg-transparent border-0 border-gray-200 rounded-lg md:bg-white md:border sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 md:px-6 sm:mt-8 sm:mb-5"
                >
                    <form onSubmit={handleLogin} className="pb-1 space-y-4">
                        <label className="block">
                            <span className="block mb-1 text-md font-medium text-gray-700">Your Email</span>
                            <input className="form-input w-full p-2" type="email" name='email' placeholder="Your email" inputmode="email" required />
                        </label>
                        <label className="block relative">
                            <span className="block mb-1 text-md font-medium text-gray-700">Your password</span>
                            <input className="form-input w-full p-2" type={showPassword ? "text" : "password"} name='password' placeholder="Password" required />
                            <span onClick={()=> setShowPassword(!showPassword)} className='absolute right-4 bottom-3'>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                        </label>
                        <div className="flex flex-col justify-center">
                            <input type="submit" className="w-full mt-5 outline-white px-4 py-2 rounded-lg hover:bg-[#ff6969] hover:text-white border border-[#ff6969] text-[#ff6969] sm:w-auto sm:mt-0" value="Login" />
                        </div>
                        {
                            logInError && <p className='text-red-500'>{logInError.slice(22, 47)}</p>
                        }
                    </form>
                </div>
            

                <p className="my-0 text-md font-medium text-center text-gray-700 sm:my-5">
                    Don't have an account?
                    <Link to='/register'><span className='ml-3 text-[#ff6969]'>Register</span></Link>
                </p>

            </div>
        </section>
    );
};

export default Login;