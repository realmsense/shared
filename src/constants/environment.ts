import "dotenv/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const ENV: IEnvironment = {
    Production: parseBool(process.env.PRODUCTION),
        
    URL: {
        API    : process.env.HTTP + process.env.API_URL,
        Website: process.env.HTTP + process.env.WEBSITE_URL,
        Updater: process.env.HTTP + process.env.EXTRACTOR_URL + process.env.EXTRACTOR_UPDATE_PATH,
    },

    JWT: {
        Secret    : process.env.JWT_SECRET,
        Expiration: parseInt(process.env.JWT_EXPIRATION)
    },

    Authkey: {
        RaidTracker   : process.env.AUTHKEY_RAID_TRACKER,
        TrackerDiscord: process.env.AUTHKEY_TRACKER_DISCORD,
        TrackerPlugin : process.env.AUTHKEY_TRACKER_PLUGIN,
    },

    Discord: {
        InviteLink  : process.env.DISCORD_INVITE,
        ClientID    : process.env.DISCORD_CLIENTID,
        ClientSecret: process.env.DISCORD_CLIENTSECRET,
        RedirectURI : process.env.DISCORD_REDIRECTURI,
        BotToken    : process.env.DISCORD_BOT_TOKEN,
    },

    RaidTracker: {
        ChannelID   : process.env.RAID_TRACKER_CHANNEL,
        SelfBotToken: process.env.RAID_TRACKER_SELFBOT_TOKEN,
    },

    Tracker: {
        API      : parseBool(process.env.TRACKER_API_ENABLED),
        Realms   : parseBool(process.env.TRACKER_REALMS_ENABLED),
        AdminName: process.env.TRACKER_ADMIN_NAME
    },

    Database: {
        db: {
            Default  : process.env.DB_DEFAULT,
            Tracker  : process.env.DB_TRACKER,
            Customers: process.env.DB_CUSTOMERS,
        },
        config: {
            type         : "mysql",
            host         : process.env.DB_HOST,
            port         : parseInt(process.env.DB_PORT),
            username     : process.env.DB_USERNAME,
            password     : process.env.DB_PASSWORD,
            database     : process.env.DB_DEFAULT,
            entities     : ["dist/src/**/*.entity.js"],
            migrations   : ["dist/src/migrations/*.js"],
            migrationsRun: parseBool(process.env.DB_MIGRATIONS),
            synchronize  : parseBool(process.env.DB_SYNCHRONIZE),
            logging      : parseBool(process.env.DB_LOGGING),
            cli: {
                migrationsDir: "src/migrations"
            }
        }
    }
};

export interface IEnvironment {
    Production: boolean;

    URL: {
        API    : string;
        Website: string;
        Updater: string;
    }

    JWT: {
        Secret    : string;
        Expiration: number;
    },

    Authkey: {
        TrackerPlugin: string;
        TrackerDiscord: string;
        RaidTracker: string;
    },

    Discord: {
        InviteLink  : string;
        ClientID    : string;
        ClientSecret: string;
        RedirectURI : string;
        BotToken    : string;
    },
    
    RaidTracker: {
        ChannelID   : string;
        SelfBotToken: string;
    }

    Tracker: {
        API      : boolean;
        Realms   : boolean;
        AdminName: string;
    }

    Database: {
        db: {
            Default  : string;
            Tracker  : string;
            Customers: string;
        },
        config: TypeOrmModuleOptions
    }
}

declare const process: {
    env: {
        [key: string]: string;
    }
};

function parseBool(string: string): boolean {
    return string === "true";
}