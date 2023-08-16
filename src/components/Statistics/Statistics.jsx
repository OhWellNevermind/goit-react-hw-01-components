import { StatisticItem } from './StatisticItem';

export const Statistics = props => {
  return (
    <section className="statistics">
      {props.title && <h2 className="title">{props.title}</h2>}
      <ul className="stat-list">
        {props.stats.map(statisticData => {
          return (
            <li key={statisticData.id} className="item">
              <StatisticItem statistic={statisticData}></StatisticItem>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
