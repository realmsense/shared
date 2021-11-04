import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export function _GetEnvObject(): IEnvironment {
    return {
        Production: parseBool(process.env.PRODUCTION),
        
        URL: {
            API    : process.env.HTTP + process.env.API_URL,
            Website: process.env.HTTP + process.env.WEBSITE_URL
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
        ClientID    : string;
        ClientSecret: string;
        RedirectURI : string;
    },
    
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