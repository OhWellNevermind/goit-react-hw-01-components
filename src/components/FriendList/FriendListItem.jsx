import { FriendsListItem, IsOnlineMarker } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, isOnline, name } }) => {
  return (
    <FriendsListItem>
      <IsOnlineMarker isOnline={isOnline}></IsOnlineMarker>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendsListItem>
  );
};
