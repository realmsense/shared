import { Permission } from ".";

export interface IUser {
    id: number;
    username: string;
    password: string;
    permissions: Permission[];
    enabled: boolean;
    createdAt: Date;
}