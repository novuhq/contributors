import { Orbit } from "../services/orbit/orbit";
import { RunnersInterface } from "./runners.interface";
import {Contributors} from "@contributors/global";

export class PullContributors implements RunnersInterface {
  name(): string {
    return "Pull Contributors";
  }

  async handle() {
    for (const contributor of await Orbit.getAllMemberList()) {
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
