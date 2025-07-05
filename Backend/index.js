import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { AppRoute } from './routes/AppRoute.js';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static file GUI
app.use(express.static(path.join(__dirname, 'GUI')));

// Đăng ký tất cả API trong AppRoute
AppRoute(app);

// Trang chính (index)
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'GUI/home.html'));
});

// Trang công dân (sau khi đăng nhập thành công)
app.get('/Users', (req, res) => {
    res.sendFile(path.join(__dirname, 'GUI/Users/maniUsers.html'));
});




// Các trang admin
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'GUI/admin/mainAdmin.html'));
});
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server chạy tại http://localhost:${PORT}/home`);
});
