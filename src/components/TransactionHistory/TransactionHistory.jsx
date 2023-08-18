import { TransactionItem } from './TransactionItem';
import { TransactionsTable } from './TransactionHistory.styled';

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
