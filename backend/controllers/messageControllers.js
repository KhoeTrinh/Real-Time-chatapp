// import model and services func
import { sendMessageS } from '../services/messageServices.js';

// send message func
const sendMessage = async (req, res) => {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    const resData = await sendMessageS(message, senderId, receiverId);
    res.status(resData.status).json(resData.json);
};

// export func
export { sendMessage };
