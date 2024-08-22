import User from '../models/userModels.js';

const signupS = async (
    fullname,
    username,
    password,
    confirmPassword,
    gender
) => {
    let resData;
    try {
        if (password !== confirmPassword) {
            resData = {
                status: 400,
                json: { message: 'Passwords do not match.' },
            };
            return resData;
        }

        const user = await User.findOne({ username });

        if (user) {
            resData = {
                status: 400,
                json: { message: 'Username already exists.' },
            };
            return resData;
        }

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullname: fullname,
            username: username,
            password: password,
            gender: gender,
            profilePic: gender === 'Male' ? boyProfilePic : girlProfilePic,
        });

        await newUser.save();
        resData = {
            status: 201,
            json: {
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic,
            },
        };
        return resData;
    } catch (err) {
        console.log('Error in signup controller:', err.message);
        resData = {
            status: 500,
            json: { error: 'Server error' },
        };
        return resData;
    }
};

export { signupS };
