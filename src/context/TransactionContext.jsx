import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5001/transactions')
      .then(response => {
        setTransactions(response.data);
        setFilteredTransactions(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const addTransaction = (transaction) => {
    axios.post('http://localhost:5001/transactions', transaction)
      .then(response => {
        setTransactions([...transactions, response.data]);
        setFilteredTransactions([...transactions, response.data]);
      })
      .catch(error => {
        setError(error);
      });
  };

  return (
    <TransactionContext.Provider value={{ transactions, filteredTransactions, addTransaction, loading, error, setFilteredTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
