// express route
import express from 'express';

const router = express.Router();

// define routes
import { signup, login, logout } from '../controllers/authControllers.js';

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

// export for use
export default router;
