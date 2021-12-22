import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export function _GetEnvObject(): IEnvironment {
    return {
        Production: parseBool(process.env.PRODUCTION),
        
        URL: {
            API    : process.env.HTTP + process.env.API_URL,
            Website: process.env.HTTP + process.env.WEBSITE_URL,
            Updater: process.env.HTTP + process.env.EXTRACTOR_URL + process.env.EXTRACTOR_UPDATE_PATH,
        },
    
        JWT: {
            Secret: process.env.JWT_SECRET,
            Expiration: parseInt(process.env.JWT_EXPIRATION)
        },
    
        Authkey: {
            Realms: process.env.AUTHKEY_REALMS,
            Players: process.env.AUTHKEY_PLAYERS,
            Discord: process.env.AUTHKEY_DISCORD
        },

        Discord: {
            InviteLink  : process.env.DISCORD_INVITE,
            ClientID    : process.env.DISCORD_CLIENTID,
            ClientSecret: process.env.DISCORD_CLIENTSECRET,
            RedirectURI : process.env.DISCORD_REDIRECTURI,
            BotToken    : process.env.DISCORD_BOT_TOKEN,
        },
    
        RaidTracker: {
            ChannelID: process.env.RAID_TRACKER_CHANNEL,
            SelfBotToken: process.env.RAID_TRACKER_SELFBOT_TOKEN,
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
                entities   : ["dist/src/**/*.entity.js"],
                migrations : ["dist/src/migrations/*.js"],
                migrationsRun: parseBool(process.env.DB_MIGRATIONS),
                synchronize: parseBool(process.env.DB_SYNCHRONIZE),
                logging    : parseBool(process.env.DB_LOGGING),
                cli: {
                    migrationsDir: "src/migrations"
                }
            }
        }
    };
}

function parseBool(string: string): boolean {
    return string === "true";
}

export interface IEnvironment {
    Production: boolean;

    URL: {
        API    : string;
        Website: string;
        Updater: string;
    }

    JWT: {
        Secret: string;
        Expiration: number;
    },

    Authkey: {
        Realms: string;
        Players: string;
        Discord: string;
    },

    Discord: {
        InviteLink  : string;
        ClientID    : string;
        ClientSecret: string;
        RedirectURI : string;
        BotToken    : string;
    },
    
    RaidTracker: {
        ChannelID: string;
        SelfBotToken: string;
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