import express from 'express';
import congdanRoute from './congdanRoute.js';
import phieuDangKyRoute from './phieuDangKyRoute.js';
import usersRoute from './usersRoute.js'; 
import hokhauRoute from './hokhauRoute.js';
import donviqlRoute from './donviqlRoute.js';
import skqlRoute from './skqlRoute.js';
export function AppRoute(app) {
    const router = express.Router();

    router.use('/congdan', congdanRoute);
    router.use('/hokhau', hokhauRoute);
    router.use('/phieu_dangky', phieuDangKyRoute);
    router.use('/users', usersRoute); 
    router.use('/donviql',donviqlRoute);
    router.use('/sukien',skqlRoute);

    app.use('/api', router);
}
