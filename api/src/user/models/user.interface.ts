export interface User {
    id?: number;
    name?: string;
    cpf?: string;
    birth?: Date;
    email?: string;
    escolaridade?: string;
    password?: string;
    role?: UserRole;
}

export enum UserRole{
    ADMIN = 'admin',
    USER = 'user',
}