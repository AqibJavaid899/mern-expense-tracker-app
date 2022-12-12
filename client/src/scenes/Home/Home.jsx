import axios from "axios";
import { useState, useEffect } from "react";

import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    handleFetchTransactions();
  }, []);

  const handleFetchTransactions = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/transaction/get",
    );
    setTransactions(response.data);
  };

  const createTransaction = async (data) => {
    const response = await axios.post(
      "http://localhost:8000/api/transaction/create",
      data,
    );
    handleFetchTransactions();
    return response.data;
  };

  return (
    <div>
      <AddTransaction createTransaction={createTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Home;
