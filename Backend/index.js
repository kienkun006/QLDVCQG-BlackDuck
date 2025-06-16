import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import db from './models/index.js';
import { AppRoute } from './routes/AppRoute.js';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cấu hình middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Phục vụ tất cả file tĩnh trong thư mục GUI
app.use(express.static(path.join(__dirname, 'GUI')));

// Các route API
AppRoute(app);

// Các route giao diện admin
app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, 'GUI/admin/danhsachusers.html'));
});

app.get('/congdan', (req, res) => {
    res.sendFile(path.join(__dirname, 'GUI/admin/danhSachCongDan.html'));
});

app.get('/hokhau', (req, res) => {
    res.sendFile(path.join(__dirname, 'GUI/admin/danhsachhokhau.html'));
});

app.get('/sukien', (req, res) => {
    res.sendFile(path.join(__dirname, 'GUI/admin/danhsachsukien.html'));
});

// Trang quản trị chính
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'GUI/admin/mainAdmin.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
