# realmsense shared types

This repository contains interfaces that are shared between multiple services, including:
* [api](https://git.extacy.cc/realmsense/api)
* [website](https://git.extacy.cc/realmsense/website)
* [tracker](https://git.extacy.cc/realmsense/tracker)
* [nrelay](https://git.extacy.cc/realmsense/nrelay)
* [realmlib](https://git.extacy.cc/realmsense/realmlib)


`.env`
```dotenv
PRODUCTION=                 # boolean

# URL
HTTP=                       # "https://" or "http://"
API_URL=                    # "api.realmsense.cc"
WEBSITE_URL=                # "realmsense.cc"
PMA_URL=                    # "pma.realmsense.cc"
TRAEFIK_URL=                # "traefik.realmsense.cc"

# Traefik
CF_DNS_API_TOKEN=           # API token with Zone.DNS:Edit permission
CF_ZONE_API_TOKEN=          # API token with Zone.Zone:Read permission
ACME_EMAIL=                 # Email address to receive notifications from Lets Encrypt
TRAEFIK_DASHBOARD_AUTH=     # htpasswd -nB username

# Discord
DISCORD_CLIENTID=           # OAuth2 Client ID
DISCORD_CLIENTSECRET=       # OAuth2 Client Secret
DISCORD_REDIRECTURI=        # OAuth2 Redirect URL

# Database
DB_DEFAULT=                 # "rs_default"
DB_TRACKER=                 # "rs_tracker"
DB_CUSTOMERS=               # "rs_customers"

DB_HOST=                    # "database"
DB_PORT=                    # "3306"
DB_USERNAME=
DB_PASSWORD=
DB_ROOT_PASSWORD=

DB_MIGRATIONS=              # boolean - should DB Migrations be auto run on start
DB_SYNCHRONIZE=             # boolean - force synchronize database with local entities. DO NOT enable in Production!!
DB_LOGGING=                 # boolean - enable logging of SQL commands
```