//notify class
export class Notify {
    public static notify(req: any, res: any) {
   //   notify.send(req.body.name, req.body.message);
      res.send('Notification sent');
    }
}