const IncomeSchema = require("../models/IncomeModel");

// Add Income
exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date, userId } = req.body;

    const income = new IncomeSchema({
        title,
        amount,
        category,
        description,
        date,
        userId // Include userId
    });

    try {
        // Validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' });
        }
        if (amount < 0) {
            return res.status(400).json({ message: 'Amount must be a positive number!' });
        }
        await income.save();
        res.status(200).json({ message: 'Income Added' });
    } catch (error) {
        console.error('Error adding income:', error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get Incomes
exports.getIncomes = async (req, res) => {
    const { userId } = req.params; // Get userId from request parameters

    if (!userId) {
        return res.status(400).json({ message: 'User ID is required!' });
    }

    try {
        const incomes = await IncomeSchema.find({ userId }).sort({ createdAt: -1 }); // Filter by userId
        res.status(200).json(incomes);
    } catch (error) {
        console.error('Error fetching incomes:', error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete Income
exports.deleteIncome = async (req, res) => {
    const { id } = req.params;

    try {
        const income = await IncomeSchema.findByIdAndDelete(id);
        if (!income) {
            return res.status(404).json({ message: 'Income not found!' });
        }
        res.status(200).json({ message: 'Income Deleted' });
    } catch (error) {
        console.error('Error deleting income:', error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Rate Limiting (Optional, Uncomment if needed)
// const rateLimit = require('express-rate-limit');
// const apiLimiter = rateLimit({
//     windowMs: 1 * 60 * 1000, // 1 minute
//     max: 10, // Limit each user to 10 requests per minute
//     message: 'Too many requests, please try again later.',
// });
// module.exports.apiLimiter = apiLimiter;
