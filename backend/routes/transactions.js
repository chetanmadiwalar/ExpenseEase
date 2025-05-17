const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const { getName } = require('../controllers/info');
const { addLimit, getLimit} = require('../controllers/limit');

const router = require('express').Router();


router.post('/add-income/:userId', addIncome)
router.get('/get-incomes/:userId', getIncomes)
router.delete('/delete-income/:id', deleteIncome)
router.post('/add-expense/:userId', addExpense)
router.get('/get-expenses/:userId', getExpense)
router.delete('/delete-expense/:id', deleteExpense)
router.post('/add-limit/:userId', addLimit)
router.get('/get-limit/:userId', getLimit)
router.get('/get-name/:userId', getName)

module.exports = router