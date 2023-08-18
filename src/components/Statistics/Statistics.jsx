import {
  StatisticWrapper,
  StatisticList,
  StatisticListItem,
  StatisticTitle,
} from './Statistics.styled';

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
