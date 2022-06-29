import { RunnersInterface } from './runners.interface';
import { GithubService } from '../services/github/github.service';
import { groupBy } from 'lodash';
import moment from 'moment';
import { Issues } from '@contributors/global';

export class GithubIssues implements RunnersInterface {
  async handle() {
    const issues = await GithubService.loadIssues();
    await Issues.updateOne(
      {},
      {
        toUpdate: true,
        issues,
      },
      {
        upsert: true,
      }
    );
  }

  name(): string {
    return 'Extract Github Issues';
  }

  schedule(): string {
    return '0 * * * *';
  }
}
