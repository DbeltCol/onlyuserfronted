import { EventEmitter } from "@angular/core";

export class Message {

    private static _error:boolean;
    private static _message:string;
    private static _success:boolean;

    static errorEmitter = new EventEmitter();
    static messageEmitter = new EventEmitter();
    static successEmitter = new EventEmitter();

    static set error(error:boolean)
    {
        this._error = error;
        this.errorEmitter.emit(error);
    }

    static get error():boolean
    {
        return this._error;
    }

    /**
     * 
     * message
     * 
    */

    static set message(message:string)
    {
        this._message = message;
        this.messageEmitter.emit(message);
    }

    static get message():string{
        return this._message
    }

    /**
     * 
     * success
     * 
    */

     static set success(success:boolean)
     {
         this._success = success;
         this.successEmitter.emit(success);
     }
 
     static get success():boolean
     {
         return this._success;
     }
 
}
