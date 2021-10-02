import { GuildRank } from "..";

export interface IAccount {
    playerID: number;
    updatedTime: Date;

    nameChosen: boolean;
    name: string;
    accountID?: string;
    supporter: boolean;
    supporterPoints: number;
    numStars: number;
    accountFame: number;
    credits: number;
    fortuneToken: number;
    currentFame: number;
    legendaryRank: number;
    forgeFire: number;
    _119: number;

    // Guild
    guildName: string;
    guildRank: GuildRank;
}