import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";

import { setUser } from "../../../state/slices/authSlice";

const TableHeader = styled(TableCell)({
  backgroundColor: "#2196f3",
  color: "white",
  fontWeight: "bold",
  padding: "10px 0px",
});

const TransactionsList = ({ setUpdateCategoryForm }) => {
  const token = Cookies.get("token");
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleDeleteCategory = async (categoryId) => {
    if (window.confirm("Are you sure to delete the Category?")) {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/category/delete/${categoryId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      response.statusText === "OK" && updateStore(categoryId);
    }
  };

  const handleEditCategory = (category) => {
    setUpdateCategoryForm(category);
  };

  const updateStore = (categoryId) => {
    const updatedCategories = user.categories.filter(
      (category) => category._id !== categoryId,
    );
    const updatedUser = { ...user, categories: updatedCategories };
    dispatch(setUser({ user: updatedUser }));
  };

  return (
    <TableContainer sx={{ width: "75%", margin: "0 auto" }} component={Paper}>
      <Table size="small">
        {/* Table Header */}
        <TableHead>
          <TableRow>
            <TableHeader align="center">Category ID</TableHeader>
            <TableHeader align="center">Label</TableHeader>
            <TableHeader align="center">Icon</TableHeader>
            <TableHeader align="center">Actions</TableHeader>
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {user.categories.map((category, key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row" align="center">
                {category._id}
              </TableCell>
              <TableCell align="center">{category.label}</TableCell>
              <TableCell align="center">{category.icon}</TableCell>
              {/* Action Buttons */}
              <TableCell align="center">
                <IconButton onClick={() => handleEditCategory(category)}>
                  <EditIcon color="primary" />
                </IconButton>
                <IconButton onClick={() => handleDeleteCategory(category._id)}>
                  <DeleteIcon color="warning" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionsList;
