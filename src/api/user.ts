import { Permission } from ".";
import { IDiscordLink } from "./discord-link";

export interface IUser {
    id: number;
    email?: string;
    discordLink?: IDiscordLink;
    username: string;
    password: string;
    permissions: Permission[];
    enabled: boolean;
    createdAt: Date;
}