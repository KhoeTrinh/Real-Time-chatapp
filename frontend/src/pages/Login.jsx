const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Log In
                    <span className='text-blue-500'> Chat App</span>
                </h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <div className='text-base label-text'>
                                Username
                            </div>
                        </label>
                        <input
                            type='text'
                            className='w-full input input-bordered h-10'
                            placeholder='Enter username'
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <div className='text-base label-text'>
                                Password
                            </div>
                        </label>
                        <input
                            type='password'
                            className='w-full input input-bordered h-10'
                            placeholder='Enter password'
                        />
                    </div>
                    <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        Don&apos;t have an account?
                    </a>

                    <div>
                        <button className="btn btn-block btn-sm mt-2">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

// const Login = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                     Log In
//                     <span className='text-blue-500'> Chat App</span>
//                 </h1>

//                 <form>
//                     <div>
//                         <label className='label p-2'>
//                             <div className='text-base label-text'>
//                                 Username
//                             </div>
//                         </label>
//                         <input
//                             type='text'
//                             className='w-full input input-bordered h-10'
//                             placeholder='Enter username'
//                         />
//                     </div>

//                     <div>
//                         <label className='label p-2'>
//                             <div className='text-base label-text'>
//                                 Password
//                             </div>
//                         </label>
//                         <input
//                             type='password'
//                             className='w-full input input-bordered h-10'
//                             placeholder='Enter password'
//                         />
//                     </div>
//                     <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//                         Don&apos;t have an account?
//                     </a>

//                     <div>
//                         <button className="btn btn-block btn-sm mt-2">Log In</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;
