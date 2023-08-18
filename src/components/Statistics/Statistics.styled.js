import { styled } from 'styled-components';

export const StatisticWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #fff;
  margin-bottom: 20px;
`;

export const StatisticTitle = styled.h2`
  text-align: center;
`;

export const StatisticList = styled.ul`
  display: flex;
  width: 100%;
`;

export const StatisticListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: ${getRandomHexColor};
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
