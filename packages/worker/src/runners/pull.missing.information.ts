import { RunnersInterface } from './runners.interface';
import { Contributors } from '@contributors/global';
import {GithubService} from "../services/github/github.service";
import {green} from "cli-color";

const teamMembers = [
  'scopsy',
  'djabarovgeorge',
  'davidsoderberg',
  'ainouzgali',
  'LetItRock',
  'BiswaViraj',
  'p-fernandez',
  'jainpawan21',
  'renovate[bot]',
  'Cliftonz',
  'sumitsaurabh927',
  'unicodeveloper',
  'ComBarnea',
  'renovate-bot',
  'iampearceman',
  'nevo-david',
  'oba2311',
]
export class PullMissingInformation implements RunnersInterface {
  name(): string {
    return 'Pull Missing Information';
  }

  async handle() {
    const list = await Contributors.find({
      github: {
        $exists: true
      },
      created_at: {
        $exists: false,
      },
    })
      .limit(10)
      .exec();

    for (const contributor of list) {
      console.log(green(`[Github] fetching information for ${contributor.github}`));
      const {company, name, email, twitter_username, bio, avatar_url, location} = await GithubService.GithubProfileInformation(contributor.github);
      await Contributors.updateOne({
        github: contributor.github
      }, {
        $set: {
          email,
          twitter: twitter_username,
          bio,
          avatar_url,
          name,
          teammate: teamMembers.indexOf(contributor.github) !== -1,
          company,
          location,
          created_at: new Date()
        }
      }).exec();
    }
  }

  schedule() {
    return '0 * * * *';
  }
}
