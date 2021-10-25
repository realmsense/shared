# realmsense shared types

This repository contains interfaces that are shared between multiple services, including:
* [api](https://git.extacy.cc/realmsense/api)
* [website](https://git.extacy.cc/realmsense/website)
* [tracker](https://git.extacy.cc/realmsense/tracker)
* [nrelay](https://git.extacy.cc/realmsense/nrelay)
* [realmlib](https://git.extacy.cc/realmsense/realmlib)


`.env`
```dotenv
PRODUICTION=bool

# URL
API_URL=string
WEBSITE_URL=string

# Discord
DISCORD_CLIENTID=string
DISCORD_CLIENTSECRET=string
DISCORD_REDIRECTURI=string

# Database
DB_DEFAULT=string
DB_TRACKER=string
DB_CUSTOMERS=string

DB_HOST=string
DB_PORT=number
DB_USERNAME=string
DB_PASSWORD=string

DB_SYNCHRONIZE=string
DB_LOGGING=bool
```