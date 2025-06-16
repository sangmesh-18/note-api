# 📝 Note API - Backend

A secure and robust RESTful API for managing personal notes. Built with Node.js, Express, and MongoDB. This API supports user registration, authentication using JWT, and full CRUD operations for user-specific notes.

---

## 🚀 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Security & Utilities**: bcryptjs, dotenv, cors, morgan
- **Development Tools**: nodemon

---

## 📁 Project Structure

backend/

├── controllers/

│ ├── authController.js

│ └── noteController.js

├── middleware/

│ └── authMiddleware.js

├── models/

│ ├── Note.js

│ └── User.js

├── routes/

│ ├── authRoutes.js

│ └── noteRoutes.js

├── config/

│ └── db.js


├── index.js

## 📦 Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/sangmesh-18/note-api.git

cd note-api

2.Install dependencies:

npm install

3.Start the development server:

npm run start

