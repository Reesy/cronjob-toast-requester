
import nodeCron from 'node-cron';
import { Notify } from './notify';
import { validator } from './validator';

export class Cron 
{
    public static cron(_cronExpression: string, _title: string, _message: string) 
    {

        validator.validateNotifyParams(_title, _message);
        validator.validateCronParams(_cronExpression);
        return nodeCron.schedule(_cronExpression, () => 
        {
            Notify.notify(_title, _message);
        });  
        
    };
};