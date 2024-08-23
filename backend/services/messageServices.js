// import model
import Message from '../models/messageModels.js';
import Conversation from '../models/conversationModels.js';

// get message service
const getMessageS = async (senderId, receiverId) => {
    try {
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        }).populate('messages');

        if (!conversation) return { status: 200, json: [] };

        return { status: 200, json: conversation.messages };
    } catch (err) {
        console.log(err.message);
        return { status: 500, json: { message: 'Server error' } };
    }
};

// send message service
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
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()]);

        return { status: 201, json: newMessage };
    } catch (err) {
        console.log(err.message);
        return { status: 500, json: { message: 'Internal Server Error' } };
    }
};

// export funcs
export { getMessageS, sendMessageS };
