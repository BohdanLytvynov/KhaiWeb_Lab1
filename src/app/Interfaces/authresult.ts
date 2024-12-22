export enum Operation
{
    Login = 0,
    SignUp,
    Logout,
    Undefined
}

export interface IAuthResult
{
    operation : Operation;
    success : boolean;
    error? : string;
}

export class AuthResult implements IAuthResult
{
    operation : Operation;
    success: boolean;
    error?: string | undefined;

    constructor(operationtype : Operation = Operation.Undefined, error : string = '')
    {        
        this.operation = operationtype;
        this.success = error.length > 0? false : true;
        this.error = error;
    }
    
}

