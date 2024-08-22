// get mongoose
import mongoose from 'mongoose';

// define schema
const conversationSchema = mongoose.Schemam(
    {
        participants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        messages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Message',
                default: [],
            },
        ],
    },
    { timestamp: true }
);

// create model
const Conversation = mongoose.model('Conversation', conversationSchema);

// export model
export default Conversation;