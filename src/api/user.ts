import { Permission } from ".";

export interface IUser {
    id: number;
    email: string;
    username: string;
    password: string;
    permissions: Permission[];
    enabled: boolean;
    createdAt: Date;
}