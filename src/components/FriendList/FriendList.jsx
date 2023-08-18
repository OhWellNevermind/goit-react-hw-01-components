import { FriendListItem } from './FriendListItem';
import { FriendsList } from './FrinendList.styled';
import propTypes from 'prop-types';

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

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      isOnline: propTypes.bool,
      avatar: propTypes.string,
      name: propTypes.string,
    })
  ),
};
