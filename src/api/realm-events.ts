import { IRealm } from "..";

export interface IRealmEvent extends IRealm {
    event: "Created" | "Updated" | "Deleted" | "Ignore"
}