import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Box,
  Autocomplete,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import { convertCategoryIdToValue } from "../../../utils/helperFunctions";

const initialState = {
  amount: "",
  description: "",
  date: dayjs(new Date()),
  categoryId: "",
};

const AddTransaction = ({
  createTransaction,
  updateTransaction,
  updateTransactionForm,
}) => {
  const [form, setForm] = useState(initialState);

  const { categories } = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (updateTransactionForm.amount !== undefined) {
      setForm(updateTransactionForm);
    }
  }, [updateTransactionForm.amount]);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDateChange = (newValue) => {
    setForm({ ...form, date: newValue });
  };

  const handleChange = async (e) => {
    e.preventDefault();
    updateTransactionForm.amount !== undefined
      ? handleUpdateTransaction(e)
      : handleCreateTransaction(e);
  };

  const handleCreateTransaction = async () => {
    await createTransaction(form);
    setForm(initialState);
  };

  const handleUpdateTransaction = async () => {
    await updateTransaction(form);
    setForm(initialState);
  };

  const handleCategoryChange = (event, newValue) => {
    setForm({ ...form, categoryId: newValue._id });
  };

  return (
    <Card
      sx={{
        width: "75%",
        margin: "4rem auto",
        padding: "0 0rem",
        height: "90px",
      }}
    >
      <form onSubmit={handleChange} autoComplete="off">
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              gap: "2rem",
            }}
          >
            {/* Form */}
            <TextField
              label="Amount"
              fullWidth
              value={form.amount}
              name="amount"
              variant="outlined"
              size="large"
              onChange={(e) => handleFormChange(e)}
            />
            <TextField
              label="Description"
              fullWidth
              value={form.description}
              name="description"
              variant="outlined"
              size="large"
              onChange={(e) => handleFormChange(e)}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={form.date}
                onChange={(newValue) => handleDateChange(newValue)}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
            </LocalizationProvider>

            <Autocomplete
              fullWidth
              value={convertCategoryIdToValue(form.categoryId, categories)}
              onChange={handleCategoryChange}
              id="controllable-states-demo"
              options={categories}
              renderInput={(params) => (
                <TextField {...params} label="Categories" />
              )}
            />

            <Button
              sx={{ width: "280px" }}
              type="submit"
              variant={updateTransactionForm.amount ? "outlined" : "contained"}
            >
              {updateTransactionForm.amount ? "UPDATE" : "SUBMIT"}
            </Button>
          </Box>
        </CardContent>
        <CardActions></CardActions>
      </form>
    </Card>
  );
};

export default AddTransaction;
