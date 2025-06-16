import db from '../models/index.js';


export async function create(req, res) {
    try {
        const { id_phieu, id_cccd, id_suKienPL, loai, ngayDK, trangThai, noiDung } = req.body;

  
        const citizen = await db.Congdan.findByPk(id_cccd);
        if (!citizen) {
            return res.status(400).json({ message: 'Công dân không tồn tại, vui lòng kiểm tra số CCCD.' });
        }

        const newPhieu = await db.PhieuDangKy.create({
            id_phieu, id_cccd, id_suKienPL, loai, ngayDK, trangThai, noiDung
        });
a
        res.status(201).json({ message: 'Thêm phiếu đăng ký thành công', data: newPhieu });
    } catch (error) {
        console.error('Lỗi khi thêm phiếu:', error);
        res.status(500).json({ message: 'Lỗi server', error: error.message });
    }
}

export async function getAll(req, res) {
    try {
        const data = await db.PhieuDangKy.findAll();
        res.status(200).json({ message: 'Lấy danh sách phiếu thành công', data });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error: error.message });
    }
}
