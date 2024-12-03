const mongoose = require('mongoose');

// Define the Expense schema
const expenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        enum: ['Food', 'Transport', 'Utilities', 'Entertainment', 'Other'],
        required: true,
    },
    date: {
        type: Date,
        default: Date.now, // Default to the current date
    },
    notes: {
        type: String,
        default: '',
    },
});

// Create the Expense model
const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
