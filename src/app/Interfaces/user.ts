export enum UserRole
{
    Admin = 0, User, None
}

export interface IUser
{
    id : number,
    login : string,
    password : string;
    name : string,
    surename : string,
    email : string,
    role : UserRole
}

export class User implements IUser
{
    id: number;
    login: string;
    name: string;
    password: string;
    surename: string;
    email: string;
    role: UserRole;

    constructor(id : number, 
        login : string, 
        password : string,
        name : string, 
        surename : string, 
        email : string, 
        role : UserRole
    )
    {
        this.id = id;
        this.login = login;
        this.password = password;
        this.name = name;
        this.surename = surename;
        this.email = email;
        this.role = role;
    }    
}

export class EmptyUser implements IUser
{
    id: number;
    login: string;
    name: string;
    password: string;
    surename: string;
    email: string;
    role: UserRole;

    constructor()
    {
        this.id = -1;
        this.login = '';
        this.password = '';
        this.name = '';
        this.surename = '';
        this.email = '';
        this.role = UserRole.None;
    }
    
    
}