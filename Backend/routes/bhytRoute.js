import express from 'express';
import { getBHYTByCCCD, giaHanBHYT } from '../controllers/bhytController.js';

const router = express.Router();

// Lấy thông tin BHYT theo CCCD
router.get('/:id_cccd', getBHYTByCCCD);

// Gia hạn BHYT
router.put('/giahan/:id_bhyt', giaHanBHYT);

export default router;
