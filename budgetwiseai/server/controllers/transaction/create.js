const Transaction = require('../../models/Transaction');
const Budget = require('../../models/Budget');
const MLCategorizationService = require('../../services/mlService');
const { validationResult } = require('express-validator');

const createTransaction = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Validation failed', details: errors.array() });
    }

    const { amount, description, date, type, category } = req.body;
    let finalCategory = category;
    let confidence = 1;

    if (!category && description) {
      const mlResult = await MLCategorizationService.categorizeTransaction(description);
      finalCategory = mlResult.category;
      confidence = mlResult.confidence;
    }

    const transaction = new Transaction({
      userId: req.user._id,
      amount: parseFloat(amount),
      description: description.trim(),
      date: new Date(date),
      type,
      category: finalCategory,
      confidence
    });

    await transaction.save();

    if (type === 'expense') {
      const transactionDate = new Date(date);
      const month = transactionDate.getMonth() + 1;
      const year = transactionDate.getFullYear();

      const budget = await Budget.findOne({ userId: req.user._id, category: finalCategory, month, year });

      if (budget) {
        budget.spentAmount += parseFloat(amount);
        const alerts = budget.checkAlerts();
        Object.assign(budget.alerts, alerts);
        await budget.save();
      }
    }

    res.status(201).json({
      message: 'Transaction added successfully',
      transaction: await transaction.populate('userId', 'firstName lastName'),
      mlCategorized: !category
    });
  } catch (error) {
    console.error('Create transaction error:', error);
    res.status(500).json({ error: 'Error adding transaction' });
  }
};

module.exports = createTransaction;
