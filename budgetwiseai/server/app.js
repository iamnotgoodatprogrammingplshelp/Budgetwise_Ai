const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const limiter = require('./config/rateLimiter');
const corsOptions = require('./config/corsOptions');
const errorHandler = require('./middleware/errorHandler');

// Routes
const routes = require('./routes');

const app = express();

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors(corsOptions));
app.use(limiter);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api', routes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Error handling middleware
app.use(errorHandler);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

module.exports = app;
