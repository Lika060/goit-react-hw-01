import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.card}>
      <img src={avatar} alt="Avatar" width="48" className={css.avatar} />
      <p className={css.name}>{name}</p>
      <p>
        <span
          className={clsx(css.status, {
            [css.online]: isOnline,
            [css.offline]: !isOnline,
          })}
        >
          {isOnline ? "Online" : "Offline"}
        </span>
      </p>
    </div>
  );
}