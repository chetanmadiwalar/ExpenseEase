import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);
    const [userId, setUserId] = useState(null); // Store user ID
    const [userName, setUserName] = useState('');


    // Function to set user ID
    const setUserIdInLocalStorage = (id) => {
        localStorage.setItem('userId', id);
        setUserId(id);
    };

    // Add income
    const addIncome = async (income) => {
        try {
            console.log(userId);
            const response = await axios.post(`${BASE_URL}add-income/${userId}`, { ...income, userId });
            getIncomes();
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    // Get incomes
    const getIncomes = async () => {
        if (userId) {
            const response = await axios.get(`${BASE_URL}get-incomes/${userId}`);
            setIncomes(response.data);
        }
    };

    // Delete income
    const deleteIncome = async (id) => {
        await axios.delete(`${BASE_URL}delete-income/${id}`);
        getIncomes();
    };

    // Calculate total income
    const totalIncome = () => {
        return incomes.reduce((total, income) => total + income.amount, 0);
    };

    // Add limit
    const addLimit = async (limit) => {
        try {
            const response = await axios.post(`${BASE_URL}add-limit/${userId}`,{ ...limit, userId});
            await getLimit();
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    // Get limit
    const getLimit = async () => {
        try {
            const response = await axios.get(`${BASE_URL}get-limit/${userId}`);
            if (response.data) {
                return response.data.amount; // Extract the amount field
            }
        } catch (error) {
            // console.error('Error fetching limit:', error.message);
            return 0; // Handle error and return null or appropriate value
        }
    };
    

    // Add expense
    const addExpense = async (expense) => {
        try {
            const response = await axios.post(`${BASE_URL}add-expense/${userId}`, { ...expense, userId });
            getExpenses();
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    // Get expenses
    const getExpenses = async () => {
        if (userId) {
            const response = await axios.get(`${BASE_URL}get-expenses/${userId}`);
            setExpenses(response.data);
        }
    };

    // Delete expense
    const deleteExpense = async (id) => {
        await axios.delete(`${BASE_URL}delete-expense/${id}`);
        getExpenses();
    };

    // Calculate total expenses
    const totalExpenses = () => {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    };

    // Calculate total balance
    const totalBalance = () => {
        return totalIncome() - totalExpenses();
    };

    // Get transaction history
    const transactionHistory = () => {
        const history = [...incomes, ...expenses];
        history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return history;
    };

    const getName = async () =>{
        if (userId) {
            const response = await axios.get(`${BASE_URL}get-name/${userId}`);
            setUserName(response.data[0].firstName);
        } 
    }

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError,
            addLimit,
            getLimit,
            userName,
            setUserName,
            getName,
            setUserIdInLocalStorage // Add the function to the context
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
