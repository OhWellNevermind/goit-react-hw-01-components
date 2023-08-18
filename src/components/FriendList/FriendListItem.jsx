import { FriendsListItem, IsOnlineMarker } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, isOnline, name } }) => {
  return (
    <FriendsListItem>
      <IsOnlineMarker is_online={isOnline ? 1 : 0}></IsOnlineMarker>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendsListItem>
  );
};
