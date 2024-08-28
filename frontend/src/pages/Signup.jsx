import { Link } from 'react-router-dom';
import GenderCheckbox from '../components/GenderCheckbox';
import { useState } from 'react';
import useSignup from '../hooks/useSignup';

const Signup = () => {
    const [inputs, setInputs] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });

    const {loading, signup} = useSignup()

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs)
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up{' '}
                    <span className='text-blue-500'> Chat App</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base lebel-text'>
                                Full name
                            </span>
                        </label>
                        <input
                            type='text'
                            value={inputs.fullname}
                            onChange={(e) =>
                                setInputs({
                                    ...inputs,
                                    fullname: e.target.value,
                                })
                            }
                            className='w-full input input-bordered h-10'
                            placeholder='Enter your full name'
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base lebel-text'>
                                Username
                            </span>
                        </label>
                        <input
                            type='text'
                            value={inputs.username}
                            onChange={(e) =>
                                setInputs({
                                    ...inputs,
                                    username: e.target.value,
                                })
                            }
                            className='w-full input input-bordered h-10'
                            placeholder='Enter username'
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base lebel-text'>
                                Password
                            </span>
                        </label>
                        <input
                            type='password'
                            value={inputs.password}
                            onChange={(e) =>
                                setInputs({
                                    ...inputs,
                                    password: e.target.value,
                                })
                            }
                            className='w-full input input-bordered h-10'
                            placeholder='Enter password'
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base lebel-text'>
                                Confirm Password
                            </span>
                        </label>
                        <input
                            type='password'
                            value={inputs.confirmPassword}
                            onChange={(e) =>
                                setInputs({
                                    ...inputs,
                                    confirmPassword: e.target.value,
                                })
                            }
                            className='w-full input input-bordered h-10'
                            placeholder='Confirm your password'
                        />
                    </div>

                    <GenderCheckbox
                        onCheckboxChange={handleCheckboxChange}
                        selectedGender={inputs.gender}
                    />

                    <Link
                        to='/login'
                        className='text-sm hover:underline hover:text-blue-600 inline-block'
                    >
                        Already have an account?
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2 border border-slate-700'>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;

// import GenderCheckbox from "../components/GenderCheckbox";

// const Signup = () => {
//     return (
//         <div className='felx flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                     Sign Up{' '}
//                     <span className='text-blue-500'> Chat App</span>
//                 </h1>

//                 <form>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base lebel-text'>
//                                 Full name
//                             </span>
//                         </label>
//                         <input
//                             type='text'
//                             className='w-full input input-bordered h-10'
//                             placeholder='Enter your full name'
//                         />
//                     </div>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base lebel-text'>
//                                 Username
//                             </span>
//                         </label>
//                         <input
//                             type='text'
//                             className='w-full input input-bordered h-10'
//                             placeholder='Enter username'
//                         />
//                     </div>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base lebel-text'>
//                                 Password
//                             </span>
//                         </label>
//                         <input
//                             type='password'
//                             className='w-full input input-bordered h-10'
//                             placeholder='Enter password'
//                         />
//                     </div>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base lebel-text'>
//                                 Confirm Password
//                             </span>
//                         </label>
//                         <input
//                             type='password'
//                             className='w-full input input-bordered h-10'
//                             placeholder='Confirm your password'
//                         />
//                     </div>

//                     <GenderCheckbox />

//                     <a href="#" className="text-sm hover:underline hover:text-blue-600 inline-block">
//                       Already have an account?
//                     </a>

//                     <div>
//                       <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Signup;
