import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(({ id, ...rest }) => {
        return (
          <li className={css.item} key={id}>
            <FriendListItem {...rest} />
          </li>
        );
      })}
    </ul>
  );
}