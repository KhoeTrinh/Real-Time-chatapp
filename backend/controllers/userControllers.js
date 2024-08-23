// get service
import { getUsersForSidebarS } from '../services/userServices.js';

// get users for sidebar func
const getUsersForSidebar = async (req, res) => {
    const loggedInUserId = req.user._id
    const resData = await getUsersForSidebarS(loggedInUserId)
    res.status(resData.status).json(resData.json)
};

// export funcs
export { getUsersForSidebar };
