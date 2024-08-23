// import model
import User from '../models/userModels.js';

// get user for sidebar service
const getUsersForSidebarS = async (loggedInUserId) => {
    try {
        const AllUsers = await User.find({
            _id: { $ne: loggedInUserId },
        }).select('-password');

        return { status: 200, json: AllUsers };
    } catch (err) {
        console.log(err.message);
        return { status: 500, json: { message: 'Server error' } };
    }
};

//export services
export { getUsersForSidebarS };
