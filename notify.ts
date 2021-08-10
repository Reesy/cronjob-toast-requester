import nodeNotifier from "node-notifier";

export class Notify 
{
    public static notify(_title: string, _message: string) 
    {

        if (typeof(_title) === "undefined")
        {
            
            let error = new Error("Title is undefined");
            throw error;
        };

        if (typeof(_message) === "undefined")
        {
            let error = new Error("Message is undefined");
            throw error;
        };
        

        return nodeNotifier.notify(
        {
            title: _title,
            message: _message
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