import { styled } from 'styled-components';

export const TransactionsTable = styled.table`
  border-collapse: collapse;
  border-radius: 10px;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;

  thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }

  th,
  td {
    font-size: 20px;
    padding: 12px 15px;
  }
`;
