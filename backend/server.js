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
app.use(express.json())

// routes
import authRoutes from './routes/authRoutes.js';

app.use('/api/auth', authRoutes);

// run express server
app.listen(port, () =>
    console.log('Server running on port: ' + port + ' 😋')
);
