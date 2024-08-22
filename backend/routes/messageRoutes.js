// express route
import express from 'express';

const router = express.Router();

// define routes
import { sendMessage } from '../controllers/messageControllers.js';
import protectRoute from '../middlewares/protectRoute.js';

router.post('/send/:id', protectRoute, sendMessage);

// export route
export default router;
