import { RunnerService } from "./services/runner/runner.service";
import { PullContributors } from "./runners/pull.contributors";
import { GithubInformation } from "./runners/github.information";
import "cli-color";
import {connection} from "@contributors/global";

(async () => {
  await connection();
  RunnerService([
    new PullContributors(),
    new GithubInformation()
  ]);
})();
