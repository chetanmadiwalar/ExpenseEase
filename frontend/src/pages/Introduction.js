import React from 'react';
import { motion } from 'framer-motion';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Introduction(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: props.mode === 'dark' ? '#001739' : 'rgb(222 222 163)' }}
    >
      <motion.div
        className="container text-center bg-white p-4 rounded shadow-lg"
        style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}
        initial={{ scale: 0.5, y: -100 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="mb-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to Expense Tracker
        </motion.h1>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Manage your expenses efficiently and effortlessly.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a href="/login" className="btn btn-success m-2">
            Login
          </a>
          <a href="/register" className="btn btn-primary m-2">
            Register
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Introduction;
