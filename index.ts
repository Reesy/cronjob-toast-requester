// A REST server that uses the express framework 
// The server listens on port 8000 for POST requests /api/v1/cron and /api/v1/notify
// The cron endpoint is used to schedule jobs to be executed at a specified time.
// The notify endpoint is used to send a notification once.

import express from 'express';
import { Cron } from './cron';
import { Notify } from './notify';
import { config } from './config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/api/v1/cron', (req: express.Request, res: express.Response) =>
{
  let body = req.body;
  Cron.cron(body);
  res.send('Initialised the cron task');
});

app.post('/api/v1/notify', (req: express.Request, res: express.Response) => 
{
  
  let body = req.body;
  let title = body.title;
  let message = body.message;
  
  try 
  {
    Notify.notify(title, message);
  }
  catch (error) 
  {
    
    if (error.message === "Title is undefined" || error.message === "Message is undefined") 
    {
      res.statusCode = 400;
      res.send("title and message are required");
      return;
    };

    if (error.message === "Title is empty" || error.message === "Message is empty")
    {
      res.statusCode = 400;
      res.send("title and message properties should not be empty");
      return;
    };

    if (error.message === "Title is too long")
    {
      res.statusCode = 400;
      res.send("the notification title should be under 20 characters");
      return; 
    };

    if (error.message === "Message is too long")
    {
      res.statusCode = 400;
      res.send("the notification message should be under 40 characters");
      return; 
    }
  };

  res.send('Notification sent!');
});

app.listen(config.port, () =>
{
  console.log(`Server listening on port ${config.port}`);
});