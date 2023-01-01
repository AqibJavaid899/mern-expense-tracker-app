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
import { setUser } from "../../../state/slices/authSlice";

const initialState = {
  label: "",
  icon: "",
};

const icons = ["User"];

const AddCategory = ({
  updateCategoryForm,
  createNewCategory,
  updateCategory,
}) => {
  const [form, setForm] = useState(initialState);

  const token = Cookies.get("token");

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (updateCategoryForm._id !== undefined) {
      setForm(updateCategoryForm);
    }
  }, [updateCategoryForm._id]);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChange = async (e) => {
    e.preventDefault();
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
    const response = await updateCategory(form);
    updateStore(response, form);
  };

  const updateStore = (response, form) => {
    if (response.statusText === "OK") {
      window.alert(response.data.message);
      setForm(initialState);

      const updatedCategories = user.categories.map((category) =>
        category._id !== form._id ? category : form,
      );
      const updatedUser = {
        ...user,
        categories: updatedCategories,
      };
      dispatch(setUser({ user: updatedUser }));
    }
  };

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
