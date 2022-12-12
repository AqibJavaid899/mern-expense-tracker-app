import { useState } from "react";
import axios from "axios";

const AddTransaction = ({ createTransaction }) => {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createTransaction(form);
    setForm({
      amount: 0,
      description: "",
      date: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="amount"
        type="number"
        value={form.amount}
        name="amount"
        onChange={(e) => handleChange(e)}
      />
      <input
        placeholder="description"
        type="text"
        value={form.description}
        name="description"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="date"
        value={form.date}
        name="date"
        onChange={(e) => handleChange(e)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTransaction;
