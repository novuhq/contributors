import { graphql } from 'gatsby';
import * as styles from './main.module.scss';

const medals = [{
  amount: 1,
  name: 'Bronze'
}, {
  amount: 3,
  name: 'Silver'
}, {
  amount: 7,
  name: 'Gold'
}];

export default function Main({
  data: {
    apollo: {
      contributors: { list },
    },
  },
}) {
  return (
    <div>
      <h1>Contributors</h1>
      <div className={styles.flex}>
        {list.map((contributor) => (
          <div>
            <div>{contributor.name || contributor.github}</div>
            <div>
              {contributor.totalLast3MonthsPulls} pulls in the last 3 months (
              {contributor.totalPulls} in total)
            </div>
            {!!contributor.twitter && (
              <div>@{contributor.twitter}</div>
            )}
            <div data-medals>
            {medals.reduce((all, current) => {
              if (current.amount <= contributor.totalLast3MonthsPulls) {
                all.push(current.name);
                return all;
              }
              else if (current.amount <= contributor.totalPulls) {
                all.push(`${current.name} (Grayed)`);
                return all;
              }

              return all;
            }, []).join(', ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerData() {
  const res = graphql`
    query blogListQuery($page: Int!) {
      apollo {
        contributors(page: $page) {
          list {
            activities_count
            name
            twitter
            title
            github
            totalPulls
            totalLast3MonthsPulls
          }
        }
      }
    }
  `;

  return {
    props: {
      contributors: res,
    },
  };
}
