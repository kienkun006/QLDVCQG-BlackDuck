import db from '../models/index.js';

// Lấy tất cả người dùng
export async function getAll(req, res) {
    try {
        const data = await db.Users.findAll();
        res.status(200).json({ message: 'Lấy danh sách người dùng thành công', data });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error: error.message });
    }
}

// Lấy 1 người dùng theo ID
export async function getById(req, res) {
    try {
        const { id_user } = req.params;
        const data = await db.Users.findByPk(id_user);

        if (!data) return res.status(404).json({ message: 'Không tìm thấy người dùng' });

        res.status(200).json({ message: 'Tìm thấy người dùng', data });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error: error.message });
    }
}

// Thêm người dùng mới
export async function create(req, res) {
    try {
        const { id_cccd, userName, passWord, vaiTro } = req.body;

        // Tự động sinh id_user
        const id_user = Math.floor(10000 + Math.random() * 90000).toString();

        const newUser = await db.Users.create({ id_user, id_cccd, userName, passWord, vaiTro });

        res.status(201).json({ message: 'Thêm người dùng thành công', data: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi thêm người dùng', error: error.message });
    }
}

// Cập nhật người dùng
export async function update(req, res) {
    try {
        const { id_user } = req.params;
        const { id_cccd, userName, passWord, vaiTro } = req.body;

        const user = await db.Users.findByPk(id_user);
        if (!user) return res.status(404).json({ message: 'Không tìm thấy người dùng để cập nhật' });

        await user.update({ id_cccd, userName, passWord, vaiTro });
        res.status(200).json({ message: 'Cập nhật người dùng thành công', data: user });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi cập nhật', error: error.message });
    }
}

// Xóa người dùng
export async function remove(req, res) {
    try {
        const { id_user } = req.params;

        const user = await db.Users.findByPk(id_user);
        if (!user) return res.status(404).json({ message: 'Không tìm thấy người dùng để xóa' });

        await user.destroy();
        res.status(200).json({ message: 'Xóa người dùng thành công' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi xóa', error: error.message });
    }
}
