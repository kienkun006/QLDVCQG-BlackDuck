import express from 'express';
import * as PhieuDangKyController from '../controllers/phieuDangKyController.js';

const router = express.Router();

router.post('/', PhieuDangKyController.create);  
router.get('/', PhieuDangKyController.getAll);   

export default router;
