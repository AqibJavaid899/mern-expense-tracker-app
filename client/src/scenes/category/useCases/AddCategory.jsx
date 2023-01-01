import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Box,
  Autocomplete,
} from "@mui/material";
import Cookies from "js-cookie";

import { fetchSignedInUser } from "../../../utils/helperFunctions";

const initialState = {
  label: "",
  icon: "",
};

const icons = ["User"];

const AddCategory = ({ updateCategoryForm, createNewCategory }) => {
  const [form, setForm] = useState(initialState);

  const token = Cookies.get("token");

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (updateTransactionForm.amount !== undefined) {
  //     setForm(updateTransactionForm);
  //   }
  // }, [updateTransactionForm.amount]);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChange = async (e) => {
    e.preventDefault();
    console.log(form);
    updateCategoryForm.label !== undefined
      ? handleUpdateTransaction(form)
      : handleCreateTransaction(form);
  };

  const handleCreateTransaction = async () => {
    const response = await createNewCategory(form);
    if (response.statusText === "OK") {
      setForm(initialState);
      await fetchSignedInUser(token, dispatch);
    }
  };

  const handleUpdateTransaction = async () => {
    // await updateTransaction(form);
    // setForm(initialState);
  };

  // const updateStore = (updatedUser) => {
  //   dispatch(setUser({ user: updatedUser }));
  //   setForm(initialState);
  // };

  const handleCategoryChange = (event, newValue) => {
    setForm({ ...form, icon: newValue });
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
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            {/* Form */}
            <TextField
              label="Label"
              value={form.label}
              name="label"
              variant="outlined"
              size="large"
              onChange={(e) => handleFormChange(e)}
              sx={{ width: 250 }}
            />

            <Autocomplete
              value={form.icon}
              onChange={handleCategoryChange}
              id="controllable-states-demo"
              options={icons}
              renderInput={(params) => <TextField {...params} label="Icons" />}
              sx={{ width: 250 }}
            />

            <Button
              type="submit"
              variant={updateCategoryForm.amount ? "outlined" : "contained"}
            >
              {updateCategoryForm.amount ? "UPDATE" : "SUBMIT"}
            </Button>
          </Box>
        </CardContent>
        <CardActions></CardActions>
      </form>
    </Card>
  );
};

export default AddCategory;
