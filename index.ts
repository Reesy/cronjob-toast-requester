// A REST server that uses the express framework 
// The server listens on port 8000 for POST requests /api/v1/cron and /api/v1/notify
// The cron endpoint is used to schedule jobs to be executed at a specified time.
// The notify endpoint is used to send a notification once.

import { createServer } from 'http';
import { Cron } from './cron';
import { Notify } from './notify';
import { config } from './config';

// let cronInstance = new Cron();
// let notifyInstance = new notify();

createServer((req: any, res: any) => 
{
  if (req.url === '/api/v1/cron') 
  {
    Cron.cron(req, res);
   // cron.ctor(req, res);
  }  
  else if (req.url === '/api/v1/notify') 
  {
    Notify.notify(req, res);
  }
}).listen(config.port, () => 
{
  console.log('Server listening on port ' + config.port);
});
