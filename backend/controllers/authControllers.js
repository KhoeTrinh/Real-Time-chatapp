// import user model
import User from '../models/userModels.js';

import { signupS } from '../services/authServices.js';

// signup func
const signup = async (req, res) => {
    const { fullname, username, password, confirmPassword, gender } =
        req.body;
    const resData = signupS(fullname, username, password, confirmPassword, gender)
    console.log(resData);
    // res.status(resData.status).json(resData.json).error(resData.error)
};

// login func
const login = async (req, res) => {};

// logout func
const logout = async (req, res) => {};

// export all funcs
export { signup, login, logout };
