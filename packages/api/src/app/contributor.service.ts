import { Contributors } from '@contributors/global';

export class ContributorService {
  static getList(page: number) {
    return Contributors.aggregate([
      {
        $skip: (page - 1) * 20,
      },
      {
        $limit: 20,
      },
    ]).exec();
  }

  static getOne(github: string) {
    return Contributors.findOne({
      github,
    }).exec();
  }
}
