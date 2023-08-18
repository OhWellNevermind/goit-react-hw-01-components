import { styled } from 'styled-components';

const getOnlineStatusColor = props => {
  console.log(props);
  if (props.isOnline) {
    return 'green';
  } else {
    return 'red';
  }
};

export const FriendsListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.75);
`;

export const IsOnlineMarker = styled.span`
  width: 15px;
  height: 15px;
  background-color: ${getOnlineStatusColor};
  border-radius: 50%;
`;
