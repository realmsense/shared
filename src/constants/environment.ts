import { } from "dotenv/config";
import { IEnvironment } from "./environment.model";

export const ENV: IEnvironment = {

    Production: parseBool(process.env.PRODUCTION),
    
    URL: {
        API    : process.env.API_URL,
        Website: process.env.WEBSITE_URL
    },

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

declare const process: {
    env: {
        [key: string]: string;
    }
};