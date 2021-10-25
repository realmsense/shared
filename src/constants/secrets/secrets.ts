import * as dotenv from "dotenv";
import { ISecrets } from "./secrets.model";

dotenv.config();

declare const process: {
    env: {
        [key: string]: string;
    }
};

export const Secret: ISecrets = {
    Discord: {
        ClientID    : process.env.DISCORD_CLIENTID,
        ClientSecret: process.env.DISCORD_CLIENTSECRET,
        RedirectURI : process.env.DISCORD_REDIRECTURI,
    },

    Database: {
        db: {
            Default  : process.env.DB_DEFAULT,
            Tracker  : process.env.DB_TRACKER,
            Customers: process.env.DB_CUSTOMERS,
        },
        config: {
            type       : "mysql",
            host       : process.env.DB_HOST,
            port       : parseInt(process.env.DB_PORT),
            username   : process.env.DB_USERNAME,
            password   : process.env.DB_PASSWORD,
            database   : process.env.DB_DEFAULT,
            entities   : ["dist/src/**/*.entity{.ts,.js}"],
            synchronize: parseBool(process.env.DB_SYNCHRONIZE),
            logging    : parseBool(process.env.DB_LOGGING),
        }
    }
};

function parseBool(string: string): boolean {
    return string === "true";
}