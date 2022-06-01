import { Contributors } from '@contributors/global';

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
      list: list.map(({ pulls, last3MonthsPulls, ...params }) => params),
      pages: Math.ceil(+pages[0].pages / 30),
    };
  }

  static getOne(github: string) {
    return Contributors.findOne({
      github,
    }).exec();
  }
}
