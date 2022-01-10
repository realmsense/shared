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
EXTRACTOR_URL=              # "rotmg.extacy.cc"
PMA_URL=                    # "pma.realmsense.cc"
TRAEFIK_URL=                # "traefik.realmsense.cc"

# Extractor
EXTRACTOR_UPDATE_PATH=      # "/production/client/current"
EXTRACTOR_WEBHOOK_URL=      # Discord webhook URL
EXTRACTOR_WEBHOOK_MESSAGE=  # "<@&848528094918737931>"

EXTRACTOR_IDA_ENABLED=      # boolean
EXTRACTOR_IDA_AUTH=         # auth string
EXTRACTOR_IDA_SERVER=       # "http://ida:5000/ida/command"
EXTRACTOR_IDA_CMD=          # "ida.sh"
EXTRACTOR_IDA_WORKDIR=      # "/usr/src/ida"

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
AUTHKEY_LOGS=               # Key for protected routes

# Discord
DISCORD_INVITE=             # Discord invite link
DISCORD_CLIENTID=           # OAuth2 Client ID
DISCORD_CLIENTSECRET=       # OAuth2 Client Secret
DISCORD_REDIRECTURI=        # OAuth2 Redirect URL
DISCORD_BOT_TOKEN=          # Discord Bot Token

# Discord Raid Tracker
RAID_TRACKER_CHANNEL=       # Announcement channel for Discord runs
RAID_TRACKER_SELFBOT_TOKEN= # Self Bot token used to track Discord runs

# Nrelay Tracker
TRACKER_API_ENABLED=        # boolean
TRACKER_REALMS_ENABLED=     # boolean
TRACKER_ADMIN_NAME=         # username of player that can send commands to the bots in game

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