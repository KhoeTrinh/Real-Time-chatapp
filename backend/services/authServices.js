// import model
import User from '../models/userModels.js';

// import bcrypt for password hashing
import bcryptjs from 'bcryptjs';

// signup service
const signupS = async (
    fullname,
    username,
    password,
    confirmPassword,
    gender
) => {
    try {
        if (
            !fullname ||
            !username ||
            !password ||
            !confirmPassword ||
            !gender
        ) {
            return {
                status: 400,
                json: { message: 'All fields are required.' },
            };
        }

        if (password !== confirmPassword) {
            return {
                status: 400,
                json: { message: 'Passwords do not match.' },
            };
        }

        const user = await User.findOne({ username });
        if (user) {
            return {
                status: 400,
                json: { message: 'Username already exists.' },
            };
        }

        const salt = await bcryptjs.genSalt(10);
        const hassed = await bcryptjs.hash(password, salt);

        const genders = gender === 'Male' ? 'boy' : 'girl';
        const profilePic =
            process.env.PROFILE_PIC_URL + genders + `/${username}`;

        const newUser = new User({
            fullname,
            username,
            password: hassed,
            gender,
            profilePic,
        });
        await newUser.save();

        return {
            status: 201,
            json: {
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic,
            },
            id: newUser._id,
        };
    } catch (err) {
        console.error(err);
        return {
            status: 500,
            json: { message: 'Internal Server Error.' },
        };
    }
};

// login service
const loginS = async (username, password) => {
    try {
        const user = await User.findOne({ username });
        const isTruePass = await bcryptjs.compare(
            password,
            user?.password || ''
        );

        if ((!user, !isTruePass)) {
            return {
                status: 401,
                json: { message: 'Invalid username or password' },
            };
        }

        return {
            status: 200,
            json: {
                _id: user._id,
                fullname: user.fullname,
                username: user.username,
                profilePic: user.profilePic,
            },
            id: user._id,
        };
    } catch (err) {
        console.error(err);
        return { status: 500, json: { message: 'Server error' } };
    }
};

// logout service
const logoutS = async () => {
    try {
        return (
            { status: 200, json: { message: 'Logout successfully' } }
        );
    } catch (err) {
        console.log(err);
        return { status: 500, json: { message: 'Server Error' } };
    }
};

// export services
export { signupS, loginS, logoutS };
