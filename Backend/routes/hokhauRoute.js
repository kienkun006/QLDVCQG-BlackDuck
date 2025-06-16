// routes/hokhauRoute.js
import express from 'express';
import { create, getAll, remove, update } from '../controllers/hokhauController.js';

const router = express.Router();

router.post('/', create);
router.get('/', getAll);
router.delete('/:id', remove);
router.put('/:id', update);

export default router;
