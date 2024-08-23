// express server
import express from 'express';

const app = express();

// .env variables
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 8000;

// connect mongoDB
import connectDB from './config/db.js'

connectDB()

// middleware
import cookieParser from 'cookie-parser';

app.use(express.json())
app.use(cookieParser())

// routes
import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js'

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/user', userRoutes);

// run express server
app.listen(port, () =>
    console.log('Server running on port: ' + port + ' 😋')
);
