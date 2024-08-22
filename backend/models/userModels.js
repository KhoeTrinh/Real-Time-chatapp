// use mongoose to create model
import mongoose from 'mongoose';

// define model schema
const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        gender: {
            type: String,
            enum: ['Male', 'Female'],
            required: true,
        },
        profilePic: {
            type: String,
            default: '',
        },
    },
    { timestamps: true }
);

// create model
const User = mongoose.model('User', userSchema);

// export model
export default User;
