import { signupS, loginS, logoutS } from '../services/authServices.js';
import generateToken from '../utils/createToken.js';

// signup func
const signup = async (req, res) => {
    const { fullname, username, password, confirmPassword, gender } =
        req.body;
    const resData = await signupS(
        fullname,
        username,
        password,
        confirmPassword,
        gender
    );
    generateToken(resData.id, res);
    res.status(resData.status).json(resData.json);
};

// login func
const login = async (req, res) => {
    const { username, password } = req.body;
    const resData = await loginS(username, password);
    generateToken(resData.id, res);
    res.status(resData.status).json(resData.json);
};
//
// logout func
const logout = async (req, res) => {
    res.cookie('jwt', '', { maxAge: 0 });
    const resData = await logoutS();
    res.status(resData.status).json(resData.json);
};

// export all funcs
export { signup, login, logout };
