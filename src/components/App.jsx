import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../user.json';
import statisticsData from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { GlobalStyle } from './GlobalStyles/GlobalStyles.styled';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <Profile userInfo={user} />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendList friends={friends}></FriendList>
      <TransactionHistory transactions={transactions}></TransactionHistory>
      <GlobalStyle></GlobalStyle>
    </Layout>
  );
};
