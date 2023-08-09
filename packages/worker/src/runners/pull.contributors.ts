import { RunnersInterface } from "./runners.interface";
import {Contributors} from "@contributors/global";
import {GithubService} from "../services/github/github.service";

export class PullContributors implements RunnersInterface {
  name(): string {
    return "Pull Contributors";
  }

  async handle() {
    for (const contributor of await GithubService.getMembersList()) {
      await Contributors.updateOne(
        {
          github: contributor.attributes.github,
        },
        { $set: contributor.attributes },
        {
          upsert: true,
        }
      );
    }
  }

  schedule() {
    return "0 * * * *";
  }
}
