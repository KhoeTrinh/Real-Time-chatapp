// import cookie
import jwt from 'jsonwebtoken';

// create cookie func
const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d',
    });

    res.cookie('jwt', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'product',
        sameSite: 'strict',
    });

    return token
}
// export cookie func
export default generateToken