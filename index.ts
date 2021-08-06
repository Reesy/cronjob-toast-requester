// A REST server that uses the express framework 
// The server listens on port 8000 for POST requests /api/v1/cron and /api/v1/notify
// The cron endpoint is used to schedule jobs to be executed at a specified time.
// The notify endpoint is used to send a notification once.


import express from 'express';
import { Cron } from './cron';
import { Notify } from './notify';
import { config } from './config';

const app = express()
 
app.get('/', (req, res) => 
{
  res.send('Hello World');
});
 
app.post('/api/v1/cron', (req: express.Request, res: express.Response) =>
{
  Cron.cron('* * * * *');
  res.send('Initialised the cron task');
});

app.post('/api/v1/notify', (req: express.Request, res: express.Response) => 
{
  res.send('Notify');
});

app.listen(config.port);
