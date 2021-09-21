import { IWorldPosData } from "..";

export interface IEntity {
    objectID: number;
    pos: IWorldPosData;
    // condition: [ConditionEffect, ConditionEffect];
    // status: ObjectStatusData;
}