import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Box,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useState } from "react";

const initialState = {
  amount: "",
  description: "",
  date: dayjs(new Date()),
};

const AddTransaction = ({ createTransaction }) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDateChange = (newValue) => {
    console.log("New Date Value is : ", newValue);
    setForm({ ...form, date: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createTransaction(form);
    setForm(initialState);
    alert("Transaction is added to the Backend.");
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
      <form onSubmit={handleSubmit} autoComplete="off">
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
              onChange={(e) => handleChange(e)}
            />
            <TextField
              label="Description"
              fullWidth
              value={form.description}
              name="description"
              variant="outlined"
              size="large"
              onChange={(e) => handleChange(e)}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={form.date}
                onChange={(newValue) => handleDateChange(newValue)}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
            </LocalizationProvider>

            <Button sx={{ width: "280px" }} type="submit" variant="contained">
              SUBMIT
            </Button>
          </Box>
        </CardContent>
        <CardActions></CardActions>
      </form>
    </Card>
  );
};

export default AddTransaction;
