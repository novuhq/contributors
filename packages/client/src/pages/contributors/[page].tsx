import { Link } from 'gatsby';
import * as styles from './contributors.module.scss';
import { axios } from '../../../helpers/axios';
import { Layout } from '../../components/layout/layout';

const medals = [
  {
    amount: 1,
    name: 'Bronze',
  },
  {
    amount: 3,
    name: 'Silver',
  },
  {
    amount: 7,
    name: 'Gold',
  },
];

export default function Page({
  pageResources: {
    json: {
      serverData: {
        contributors: { list },
      },
    },
  },
}) {
  return (
    <Layout>
      <div>
        <h1>Contributors</h1>
        <div
          className={
            // @ts-ignore
            styles.flex
          }
        >
          {list.map((contributor) => (
            <Link to={'/contributor/' + contributor.github}>
              <div>{contributor.name || contributor.github}</div>
              <div>
                {contributor.totalLast3MonthsPulls} pulls in the last 3 months (
                {contributor.totalPulls} in total)
              </div>
              {!!contributor.twitter && <div>@{contributor.twitter}</div>}
              <div data-medals>
                {medals
                  .reduce((all, current) => {
                    if (current.amount <= contributor.totalLast3MonthsPulls) {
                      all.push(current.name);
                      return all;
                    } else if (current.amount <= contributor.totalPulls) {
                      all.push(`${current.name} (Grayed)`);
                      return all;
                    }

                    return all;
                  }, [])
                  .join(', ')}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerData(context) {
  try {
    const contributors = await axios.get(
      '/contributors/' + context.params.page
    );

    return {
      props: {
        contributors: contributors.data,
      },
    };
  } catch (err) {
    console.log(err);
  }
}
