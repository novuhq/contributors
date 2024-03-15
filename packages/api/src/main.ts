import {connection} from "@contributors/global";
import {ContributorService} from "./app/contributor.service";
import express from 'express';
import {IssuesService} from "./app/issues.service";
import {GithubService} from '../../worker/src/services/github/github.service';
const app = express();


(async () => {
  await connection();
  app.get('/', async (req, res) => {
    res.json({success: true});
  });

  app.use('/issues', async (req, res) => {
    res.json({issues: await IssuesService.getList()});
  });

  app.use('/contributors', async (req, res) => {
    res.json(await ContributorService.getList());
  });

  app.use('/team-members', async (req, res) => {
    res.json(await GithubService.getTeamMembers());
  });

  app.use('/contributors-mini', async (req, res) => {
    res.json(await ContributorService.getListMini());
  });

  app.use('/contributor/:name', async (req, res) => {
    if (!req.params.name) {
      res.send(false);
    }

    res.json(await ContributorService.getOne(req.params.name));
  });

  app.use('/badge/:name', async (req, res) => {
    if (!req.params.name) {
      res.send(false);
    }

    res.json(await ContributorService.getBadge(req.params.name));
  });

  app.listen(process.env.EXPRESS, () => {
    console.log('listening on port ' + process.env.EXPRESS);
  });
})();
