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
import axios from "axios";
import Cookies from "js-cookie";

import { dateFormat } from "../../../utils/helperFunctions";

const TableHeader = styled(TableCell)({
  backgroundColor: "#2196f3",
  color: "white",
  fontWeight: "bold",
});

const TransactionsList = ({
  transactions,
  handleFetchTransactions,
  setUpdateTransactionForm,
}) => {
  const token = Cookies.get("token");

  const handleUpdateTransaction = (transaction) => {
    setUpdateTransactionForm(transaction);
  };

  const handleDeleteTransaction = async (id) => {
    if (window.confirm("Are you sure to delete the Transaction?")) {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}transaction/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      reloadTransactions(response);
    }
  };

  const reloadTransactions = (response) => {
    if (response.statusText === "OK") {
      window.alert(response.data.message);
      handleFetchTransactions();
    }
  };

  return (
    <TableContainer sx={{ width: "75%", margin: "0 auto" }} component={Paper}>
      <Table size="small">
        {/* Table Header */}
        <TableHead>
          <TableRow>
            <TableHeader align="center">Transaction ID</TableHeader>
            <TableHeader align="center">Amount (USD)</TableHeader>
            <TableHeader align="center">Description</TableHeader>
            <TableHeader align="center">Date</TableHeader>
            <TableHeader align="center">Actions</TableHeader>
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {transactions.map((transaction, key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row" align="center">
                {transaction._id}
              </TableCell>
              <TableCell align="center">{transaction.amount}</TableCell>
              <TableCell align="center">{transaction.description}</TableCell>
              <TableCell align="center">
                {dateFormat(transaction.date)}
              </TableCell>

              {/* Action Buttons */}
              <TableCell align="center">
                <IconButton
                  onClick={() => handleUpdateTransaction(transaction)}
                >
                  <EditIcon color="primary" />
                </IconButton>
                <IconButton
                  onClick={() => handleDeleteTransaction(transaction._id)}
                >
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
