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
        
        if (_title === "")
        {
            let error = new Error("Title is empty");
            throw error;
        };

        if (_message === "")
        {
            let error = new Error("Message is empty");
            throw error;
        };

        if (_title.length > 20)
        {
            let error = new Error("Title is too long");
            throw error;
        };

        if (_message.length > 40)
        {
            let error = new Error("Message is too long");
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