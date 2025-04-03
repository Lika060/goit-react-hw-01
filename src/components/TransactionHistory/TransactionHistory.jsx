// import st from "./TransactionHistory.module.css";

// const TransactionHistory = ({ items }) => {
//   return (
//     <table className={st.table}>
//       <thead>
//         <tr>
//           <th className={st.tableHead}>Type</th>
//           <th className={st.tableHead}>Amount</th>
//           <th className={st.tableHead}>Currency</th>
//         </tr>
//       </thead>

//       <tbody>
//         {items.map(({ id, type, amount, currency }) => (
//           <tr key={id}>
//             <td className={st.tableBody}>{type}</td>
//             <td className={st.tableBody}>{amount}</td>
//             <td className={st.tableBody}>{currency}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };
// export default TransactionHistory;

import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.tableHead}>Type</th>
          <th className={styles.tableHead}>Amount</th>
          <th className={styles.tableHead}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td className={styles.tableBody} data-label="Type">{item.type}</td>
            <td className={styles.tableBody} data-label="Amount">{item.amount}</td>
            <td className={styles.tableBody} data-label="Currency">{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;