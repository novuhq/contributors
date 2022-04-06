import { Contributors } from '@contributors/global';

export class ContributorService {
  static async getList(page: number) {
    const [{list, pages}] = await Contributors.aggregate([
      {
        $facet: {
          list: [
            {
              $sort: {
                totalLast3MonthsPulls: -1,
              },
            },
            {
              $skip: (page - 1) * 20,
            },
            {
              $limit: 20,
            },
          ],
          pages: [{ $count: 'pages' }],
        },
      },
    ]).exec();

    return {
      list,
      pages: Math.ceil(pages[0].pages / 20) + 1
    }
  }

  static getOne(github: string) {
    return Contributors.findOne({
      github,
    }).exec();
  }
}
