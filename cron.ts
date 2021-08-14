
import nodeCron from 'node-cron';
import { Notify } from './notify';
import { validator } from './validator';

export class Cron 
{
    public static cron(cronExpression: string, _title: string, _message: string) 
    {

        validator.validateNotifyParams(_title, _message);
        return nodeCron.schedule(cronExpression, () => 
        {
            Notify.notify(_title, _message);
        });  
        
    };
};