import nodeNotifier from "node-notifier";
import { validator } from "./validator";

export class Notify 
{
    public static notify(_title: string, _message: string) 
    {
        
        validator.validateNotifyParams(_title, _message);
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