const errorHandler = (err, req, res, next) => {
  console.error('🚨 Error:', err);

  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: 'Validation Error', details: err.message });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  res.status(500).json({ error: 'Internal server error' });
};

module.exports = errorHandler;
