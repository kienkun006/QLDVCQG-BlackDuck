import express from 'express';
import { login } from '../controllers/loginControllers.js';

const router = express.Router();

// POST /api/login
router.post('/login', login);

export default router;
