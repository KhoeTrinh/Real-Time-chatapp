// get express route
import express from 'express';

const router = express.Router();

// define routes
import protectRoute from '../middlewares/protectRoute.js';
import { getUsersForSidebar } from '../controllers/userControllers.js';

router.get('/', protectRoute, getUsersForSidebar);

// export route
export default router;
