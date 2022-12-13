import axios from "axios";
import { useState, useEffect } from "react";

import AddTransaction from "./useCases/AddTransaction";
import TransactionsList from "./useCases/TransactionsList";

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    handleFetchTransactions();
  }, []);

  const handleFetchTransactions = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}transaction/get`,
    );
    setTransactions(response.data);
  };

  const createTransaction = async (data) => {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}transaction/create`,
      data,
    );
    handleFetchTransactions();
    return response.data;
  };

  return (
    <div>
      <AddTransaction createTransaction={createTransaction} />
      <TransactionsList transactions={transactions} />
    </div>
  );
};

export default Home;
