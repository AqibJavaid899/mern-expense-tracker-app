import React from "react";

const TransactionList = ({ transactions }) => {
  return (
    <div>
      {transactions.map((value, key) => (
        <div key={key}>
          <br />
          <span>
            {value._id}
            {" || "}
          </span>
          <span>
            {value.amount}
            {" || "}
          </span>
          <span>
            {value.description}
            {" || "}
          </span>
          <span>
            {value.date}
            {" || "}
          </span>
          <br />
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
