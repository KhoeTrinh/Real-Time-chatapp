// import model
import Message from '../models/messageModels.js';
import Conversation from '../models/conversationModels.js';

const sendMessageS = async (message, senderId, receiverId) => {
    try {
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if (newMessage) {
            conversation.message.push(newMessage._id);
        }
        return { status: 201, json: newMessage };
    } catch (err) {
        console.log(err.message);
        return { status: 500, json: { message: 'Internal Server Error' } };
    }
};

export { sendMessageS };
