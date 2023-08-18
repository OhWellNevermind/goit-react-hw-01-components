import {
  StatisticWrapper,
  StatisticList,
  StatisticListItem,
  StatisticTitle,
} from './Statistics.styled';

import propTypes from 'prop-types';

export const Statistics = props => {
  return (
    <StatisticWrapper>
      {props.title && <StatisticTitle>{props.title}</StatisticTitle>}
      <StatisticList>
        {props.stats.map(statisticData => {
          return (
            <StatisticListItem key={statisticData.id}>
              <span className="label">{statisticData.label}</span>
              <span className="percentage">{statisticData.percentage}%</span>
            </StatisticListItem>
          );
        })}
      </StatisticList>
    </StatisticWrapper>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      label: propTypes.string,
      percentage: propTypes.number,
    })
  ).isRequired,
};
