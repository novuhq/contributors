import {Contributors, Issues} from '@contributors/global';
import moment from 'moment';

export class IssuesService {
  static async getList() {
    return (await Issues.findOne({})).issues;
  }
}
