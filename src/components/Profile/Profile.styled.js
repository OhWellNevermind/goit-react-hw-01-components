const { styled } = require('styled-components');

export const ProfileWrapper = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0px 0px 0px;
  border: 1px solid gray;
  background-color: white;
  margin-bottom: 20px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-bottom: 25px;
`;

export const DescriptionUserName = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  color: black;
`;

export const DescriptionAddInfo = styled.p`
  color: rgb(124, 124, 124);
  margin-bottom: ${props => {
    return props.margin_bottom;
  }};
`;

export const StatsList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  width: 100%;
  margin: 0;
  :last-child {
    border-right: none;
  }
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid grey;
  border-right: 1px solid grey;
  padding: 10px;
  width: 100%;
`;

export const StatsItemText = styled.span`
  color: rgb(91, 91, 91);
`;
