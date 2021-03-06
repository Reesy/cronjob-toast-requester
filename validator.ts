

export class validator
{

    public static validateNotifyParams(_title: string, _message: string) 
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

    };

    public static validateCronParams(_cron: string)
    {
        if (typeof(_cron) === "undefined")
        {
            let error = new Error("Cron is undefined");
            throw error;
        };

        if (_cron === "")
        {
            let error = new Error("Cron is empty");
            throw error;
        };

        if (_cron.length < 9)
        {
            let error = new Error("Cron expression is too short");
            throw error;
        };


    };

};