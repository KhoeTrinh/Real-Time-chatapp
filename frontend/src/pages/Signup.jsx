const Signup = () => {
    return (
        <div className='felx flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up{' '}
                    <span className='text-blue-500'> Chat App</span>
                </h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base lebel-text'>
                                Full name
                            </span>
                        </label>
                        <input
                            type='text'
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
                            className='w-full input input-bordered h-10'
                            placeholder='Confirm your password'
                        />
                    </div>
                    <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block">
                      Already have an account?
                    </a>

                    <div>
                      <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
