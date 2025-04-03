import './App.css'
import userData from "./data/userData.json";
import Profile from "./components/Profile/Profile.jsx";

import friends from "./data/friends.json";
import FriendList from "./components/FriendList/FriendList.jsx";

import transactions from "./data/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
