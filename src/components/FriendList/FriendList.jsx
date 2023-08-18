import { FriendListItem } from './FriendListItem';
import { FriendsList } from './FrinendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList className="friend-list">
      {friends.map(friendListItem => {
        return (
          <FriendListItem
            key={friendListItem.id}
            friend={friendListItem}
          ></FriendListItem>
        );
      })}
    </FriendsList>
  );
};
