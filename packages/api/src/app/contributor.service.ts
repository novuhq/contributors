import { Contributors } from '@contributors/global';
import moment from 'moment';

export class ContributorService {
  static async getList() {
    const [{ list, pages }] = await Contributors.aggregate([
      {
        $facet: {
          list: [
            {
              $sort: {
                teammate: 1,
                totalLast3MonthsPulls: -1,
              },
            },
          ],
          pages: [{ $count: 'pages' }],
        },
      },
    ]).exec();

    return {
      list: list.map(({ pulls, last3MonthsPulls, ...params }) => ({
        ...params,
        pulls: pulls.slice(0, 1),
      })),
      pages: Math.ceil(+pages[0].pages / 30),
    };
  }

  static async getBadge(github: string) {
    const one = await ContributorService.getOne(github);
    const badgeCalculation = one.pulls
      .slice(0)
      .reverse()
      .reduce(
        (all, current) => {
          if (all.counter === 1 || all.counter === 3 || all.counter === 7) {
            all.values[all.counter] = moment(current.merged_at)
          }
          all.counter += 1;
          return all;
        },
        { counter: 1, values: {} }
      ).values;
    return {
      name: one.name,
      avatar_url: one.avatar_url,
      totalPulls: one.pulls.length,
      pulls: Object.keys(badgeCalculation).map((b) => ({
        total: b,
        date: badgeCalculation[b],
      })),
    };
  }

  static getOne(github: string) {
    return Contributors.findOne({
      github,
    }).exec();
  }
}
