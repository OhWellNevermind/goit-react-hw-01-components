import { TransactionItem } from './TransactionItem';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
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
    </table>
  );
};
