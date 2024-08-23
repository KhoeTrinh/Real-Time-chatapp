// import model and services func
import { getMessageS, sendMessageS } from '../services/messageServices.js';

// get message func
const getMessage = async (req, res) => {
    const {id: receiverId} = req.params
    const senderId = req.user._id
    const resData = await getMessageS(senderId, receiverId)
    res.status(resData.status).json(resData.json)
}; 

// send message func
const sendMessage = async (req, res) => {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    const resData = await sendMessageS(message, senderId, receiverId);
    res.status(resData.status).json(resData.json);
};

// export func
export { getMessage, sendMessage };
