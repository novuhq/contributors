import { RunnersInterface } from "./runners.interface";
import { GithubService } from "../services/github/github.service";
import { groupBy } from "lodash";
import moment from "moment";
import {Contributors} from "@contributors/global";

export class GithubInformation implements RunnersInterface {
  async handle() {
    const pulls = await GithubService.loadPullRequests();
    const assignee = groupBy(
      pulls.filter((f) => f.merged_at && moment(f.merged_at)),
      (pull) => pull.user.login
    );

    for (const github of Object.keys(assignee)) {
      await Contributors.updateOne(
        {
          github,
        },
        {
          $set: {
            pulls: assignee[github],
          },
        },
        {
          upsert: true,
        }
      );
    }
  }

  name(): string {
    return "Extract Github Information";
  }

  schedule(): string {
    return "0 * * * *";
  }
}
