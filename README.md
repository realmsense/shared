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
UPDATE_URL=                 # "rotmg.extacy.cc"
UPDATE_PATH=                # "/production/client/current"
PMA_URL=                    # "pma.realmsense.cc"
TRAEFIK_URL=                # "traefik.realmsense.cc"

# Traefik
CF_DNS_API_TOKEN=           # API token with Zone.DNS:Edit permission
CF_ZONE_API_TOKEN=          # API token with Zone.Zone:Read permission
ACME_EMAIL=                 # Email address to receive notifications from Lets Encrypt
TRAEFIK_DASHBOARD_AUTH=     # htpasswd -nB username

# JWT
JWT_SECRET=                 # Random password string
JWT_EXPIRATION=             # in seconds

# Authkey
AUTHKEY_REALMS=             # Key for protected routes
AUTHKEY_PLAYERS=            # Key for protected routes
AUTHKEY_DISCORD=            # Key for protected routes

# Discord
DISCORD_INVITE=             # Discord invite link
DISCORD_CLIENTID=           # OAuth2 Client ID
DISCORD_CLIENTSECRET=       # OAuth2 Client Secret
DISCORD_REDIRECTURI=        # OAuth2 Redirect URL
DISCORD_BOT_TOKEN=          # Discord Bot Token

# Raid Tracker
RAID_TRACKER_SELFBOT_TOKEN= # Self Bot token used o track Discord runs

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