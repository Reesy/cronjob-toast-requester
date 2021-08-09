import nodeNotifier from "node-notifier";

export class Notify 
{
    public static notify(req: any, res: any) 
    {

        return nodeNotifier.notify(
        {
            title: "Notification",
            message: "This is a notification"
        }, 
        (err, response) => 
        {
            if (err) 
            {
                console.log("The error is: ", err);
            }
            else 
            {
                console.log("The response is: ", response);
            }
        });

    };
};