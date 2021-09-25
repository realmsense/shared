import { IWorldPosData } from "..";

export interface IEntity {
    objectID: number;
    objectType: number;
    pos: IWorldPosData;
    // condition: [ConditionEffect, ConditionEffect];
    // status: ObjectStatusData;
}