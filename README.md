# 💰 BudgetWise AI Backend  

> 🚀 An **AI-powered personal finance backend** built with Node.js, Express, MongoDB, and JWT authentication.  
> Features include **budget tracking, transaction management, CSV uploads, and machine learning insights**.

---

## ⚙️ Installation  

### 1. Clone the repository  
```bash
git clone https://github.com/yourusername/budgetwise-ai-backend.git
cd budgetwise-ai-backend/server
npm install
cp .env.example .env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/budgetwise
JWT_SECRET=your_super_secret_jwt_key_here
JWT_REFRESH_SECRET=your_refresh_token_secret_here
FRONTEND_URL=http://localhost:3000

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
PORT=5000
MONGODB_URI=mongodb://localhost:27017/budgetwise
JWT_SECRET=your_super_secret_jwt_key_here
JWT_REFRESH_SECRET=your_refresh_token_secret_here
FRONTEND_URL=http://localhost:3000

The server will run on:
👉 http://localhost:5000

🛠 API Overview
🔑 Auth (/api/auth)

POST /register → Register new user

POST /login → Authenticate and get JWT

POST /refresh → Refresh token

POST /logout → Revoke refresh token

👤 User (/api/user)

GET /profile → Get user profile

PUT /update → Update user profile

💳 Transactions (/api/transactions)

POST / → Create transaction

GET / → Get all transactions

PUT /:id → Update transaction

DELETE /:id → Delete transaction

POST /upload → Upload CSV transactions

GET /categories → Get categories

📊 Budgets (/api/budgets)

POST / → Create budget

GET / → Get budgets

PUT /:id → Update budget

📈 Analytics (/api/analytics)

GET /overview → Spending overview

GET /trends → Spending trends

🧰 Tech Stack

Node.js + Express.js → REST API

MongoDB + Mongoose → Database

JWT + bcryptjs → Authentication

Nodemailer → Email service

TensorFlow.js → Machine learning features

Helmet, CORS, Compression → Security & performance

✅ Features

✔️ Secure JWT authentication (access + refresh tokens)
✔️ User management with preferences
✔️ Transaction + budget tracking
✔️ File upload & CSV parsing
✔️ AI-powered transaction categorization (ML)
✔️ Rate limiting, CORS, and error handling middleware

🧪 Testing

Run Jest tests with:

npm test

📌 Roadmap

 Email verification & password reset

 Add unit & integration tests

 Expand ML service with predictive analytics

 Dockerize for production deployment

📜 License

This project is licensed under the MIT License
.

👨‍💻 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

🚀 Built with ❤️ for smarter personal finance.


