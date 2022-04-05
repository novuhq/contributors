import { RunnersInterface } from "../../runners/runners.interface";
import schedule from "node-schedule";
import { parseExpression } from "cron-parser";
import { green } from "cli-color";
import moment from "moment";

export const RunnerService = (services: RunnersInterface[]) => {
  return services.map((s) => {
    const scheduleTime = s.schedule();
    s.handle();

    console.log(
      green(
        `[CRON] ${s.name().toUpperCase()}: Next Run ${moment(
          parseExpression(scheduleTime).next().toDate()
        ).format("DD/MM/YYYY HH:mm")}`
      )
    );
    schedule.scheduleJob(s.schedule(), s.handle);
  });
};
