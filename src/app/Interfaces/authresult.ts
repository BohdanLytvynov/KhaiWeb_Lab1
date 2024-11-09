export interface IAuthResult
{
    success : boolean;
    error? : string;
}

export class AuthResult implements IAuthResult
{
    success: boolean;
    error?: string | undefined;

    constructor(error : string = '')
    {
        this.success = error.length > 0? false : true;
        this.error = error;
    }
    
}

