 # 🌐 Intern Dashboard

A full-stack web application that allows interns to **register**, **log in**, and view their **personal dashboard**, including referral codes, donation amounts, and static rewards.

## 🚀 Live Demo

🔗 [Visit Intern Dashboard](https://intern-dashboard-8kyq.onrender.com/dashboard)

---

## 📦 Features

- 🔐 Intern Registration & Login (session-based auth)
- 📋 Dashboard Includes:
  - ✅ Intern Name
  - 📇 Referral Code
  - 💰 Donation Amount
  - 🏆 Static Rewards
- 💅 Stylish, responsive UI (no Bootstrap)
- 🎨 CSS Animations for smooth experience
- 📂 Folder structure separation for better management
- 🛡️ Secure `.env` usage & MongoDB Atlas connection

---

## 📁 Project Structure

intern-dashboard/
├── backend/
│ ├── models/ # Mongoose models
│ ├── routes/ # Express routes
│ ├── views/ # EJS templates
│ ├── public/ # Static files (CSS, JS, images)
│ ├── app.js # Main server file
│ ├── package.json # Backend dependencies
│ └── .env # Environment variables (ignored in Git)
