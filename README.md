# BudgetWise AI

BudgetWise AI is a full-stack financial management application designed to help users track expenses, manage budgets, and gain insights into their financial habits. The system provides secure authentication, transaction tracking, and AI-assisted budgeting insights.

The project is structured as a modern JavaScript application with a Node.js backend and a web-based frontend.

---

# Features

* User authentication using JSON Web Tokens
* Secure password management
* Expense and income tracking
* Budget management
* Email notifications
* Rate limiting and API protection
* Structured logging
* MongoDB database integration
* Modular backend architecture

---

# Project Structure

```
budgetwiseai/
│
├── client/                 Frontend application
│
└── server/
    │
    ├── config/             Configuration files
    │   └── db.js
    │
    ├── controllers/        Route controllers
    │
    ├── middleware/         Express middleware
    │   ├── authMiddleware.js
    │   ├── errorMiddleware.js
    │   └── rateLimiter.js
    │
    ├── models/             Database models
    │
    ├── routes/             API routes
    │
    ├── services/           Business logic services
    │   └── emailService.js
    │
    ├── utils/              Utility modules
    │   └── logger.js
    │
    └── server.js           Application entry point
```

---

# Technology Stack

Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Nodemailer
* Winston logging

Frontend

* React
* Modern JavaScript tooling

---

# Installation

Clone the repository:

```
git clone https://github.com/iamnotgoodatprogrammingplshelp/Budgetwise_Ai.git
```

Move into the project directory:

```
cd Budgetwise_Ai
```

Install backend dependencies:

```
cd budgetwiseai/server
npm install
```

Install frontend dependencies:

```
cd ../client
npm install
```

---

# Required NPM Packages

The backend requires the following packages.

Install them using:

```
npm install express mongoose dotenv jsonwebtoken bcryptjs cors nodemailer winston express-rate-limit express-validator morgan
```

Optional development dependencies:

```
npm install --save-dev nodemon
```

---

# Environment Variables

Create a `.env` file inside the server directory.

Example configuration:

```
PORT=5000

MONGODB_URI=mongodb://localhost:27017/budgetwise

JWT_SECRET=your_jwt_secret

EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your_email
EMAIL_PASS=your_email_password

FRONTEND_URL=http://localhost:3000
```

---

# Running the Application

Start the backend server:

```
npm run dev
```

or

```
node server.js
```

Start the frontend:

```
npm start
```

---

# Security Features

The backend implements several security mechanisms:

* JWT authentication
* Rate limiting
* Password hashing
* Environment-based configuration
* Centralized error handling

---

# Logging

The system uses Winston for structured logging. Logs are written both to the console and to log files for debugging and monitoring.

---

# API Architecture

The backend follows a layered architecture:

* Routes handle incoming HTTP requests
* Controllers process the request logic
* Services implement business functionality
* Models define MongoDB schemas
* Middleware handles authentication, validation, and errors

---

# Development

For development with automatic reload:

```
npm run dev
```

This requires nodemon.

---

# License

This project is open source and available under the MIT License.
