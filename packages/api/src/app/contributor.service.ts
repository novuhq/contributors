import { Contributors } from '@contributors/global';
import moment from 'moment';

export class ContributorService {
  static async getList() {
    const list = await Contributors.aggregate([
      {
        $sort: {
          teammate: 1,
          totalLast3MonthsPulls: -1,
        },
      },
    ]).exec();

    return {
      list: list.map(({ pulls, last3MonthsPulls, ...params }) => ({
        ...params,
        pulls: pulls.slice(0, 1),
      })),
      pages: 10000,
    };
  }

  static async getListMini() {
    const list = await Contributors.aggregate([
      {
        $sort: {
          teammate: 1,
          totalLast3MonthsPulls: -1,
        },
      },
      {
        $project: {
          _id: true,
          github: true,
          avatar_url: true,
          name: true,
          totalPulls: true
        }
      }
    ]).exec();

    return {
      list: list,
      pages: 10000,
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
            all.values[all.counter] = moment(current.merged_at);
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
