
import nodeCron from 'node-cron';

export class Cron 
{
    public static cron(cronExpression: any) 
    {
        return nodeCron.schedule(cronExpression, () => 
        {
            let currentDate = new Date();
            console.log('The current Time is ', currentDate.getHours(), ':', currentDate.getMinutes(), ':', currentDate.getSeconds());
        });  
        
    };
};