import { IServer, IWorldPosData } from "..";

export interface IRealm {
    name: string;
    openedTime: number;
    objectID: number;
    pos: IWorldPosData;
    server: IServer,
    players: number,
    maxPlayers: number,

    queue: number,
    updatedTime: number,

    ip?: string,
    heroesLeft?: number
}