import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export interface ISecrets {
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
