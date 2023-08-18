import { TransactionItem } from './TransactionItem';
import { TransactionsTable } from './TransactionHistory.styled';
import propTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionsTable className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => {
          return (
            <TransactionItem
              key={transaction.id}
              transactionData={transaction}
            ></TransactionItem>
          );
        })}
      </tbody>
    </TransactionsTable>
  );
};

TransactionHistory.propTypes = {
  transactions: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      type: propTypes.string,
      amount: propTypes.string,
      currency: propTypes.string,
    })
  ),
};
