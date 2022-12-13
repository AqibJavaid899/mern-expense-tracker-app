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
import moment from "moment";

const TableHeader = styled(TableCell)({
  backgroundColor: "#2196f3",
  color: "white",
  fontWeight: "bold",
});

const TransactionsList = ({ transactions }) => {
  return (
    <TableContainer sx={{ width: "80%", margin: "0 auto" }} component={Paper}>
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
                {moment(transaction.date).format("DD-MM-YYYY")}
              </TableCell>
              <TableCell align="center">
                <IconButton>
                  <EditIcon />
                </IconButton>
                <IconButton>
                  <DeleteIcon />
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
