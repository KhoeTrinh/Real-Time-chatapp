// import cookie
import jwt from 'jsonwebtoken';
import User from '../models/userModels.js';

// create protect func
const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        console.log(req.cookies);
        if (!token)
            return res
                .status(401)
                .json({ message: 'Unauthorized - No Token Provided' });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded)
            return res
                .status(401)
                .json({ message: 'Unauthorized - Invalid Token' });

        const user = await User.findById(decoded.userId).select(
            '-password'
        );
        if (!user)
            return res.status(401).json({ message: 'User not found' });

        req.user = user;
        next();
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// export protectRoute func
export default protectRoute;
