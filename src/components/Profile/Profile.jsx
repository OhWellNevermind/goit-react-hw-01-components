import {
  ProfileWrapper,
  DescriptionWrapper,
  Avatar,
  DescriptionUserName,
  DescriptionAddInfo,
  StatsList,
  StatsListItem,
  StatsItemText,
} from './Profile.styled';
import propTypes from 'prop-types';

export const Profile = ({
  userInfo: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfileWrapper>
      <DescriptionWrapper>
        <Avatar src={avatar} alt="User avatar" />
        <DescriptionUserName>{username}</DescriptionUserName>
        <DescriptionAddInfo margin_bottom="10px">@{tag}</DescriptionAddInfo>
        <DescriptionAddInfo>{location}</DescriptionAddInfo>
      </DescriptionWrapper>

      <StatsList>
        <StatsListItem>
          <StatsItemText>Followers</StatsItemText>
          <StatsItemText>{stats.followers}</StatsItemText>
        </StatsListItem>
        <StatsListItem>
          <StatsItemText>Views</StatsItemText>
          <StatsItemText>{stats.views}</StatsItemText>
        </StatsListItem>
        <StatsListItem>
          <StatsItemText>Likes</StatsItemText>
          <StatsItemText>{stats.likes} </StatsItemText>
        </StatsListItem>
      </StatsList>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  userInfo: propTypes.shape({
    name: propTypes.string,
    tag: propTypes.string,
    location: propTypes.string,
    avatar: propTypes.string,
    stats: propTypes.shape({
      followers: propTypes.number,
      views: propTypes.number,
      likes: propTypes.number,
    }),
  }).isRequired,
};
