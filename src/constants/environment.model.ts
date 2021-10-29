import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export interface IEnvironment {
    Production: boolean;

    URL: {
        API    : string;
        Website: string;
    }

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
