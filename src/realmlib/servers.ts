import { IServer } from "..";

export const Servers: IServer[] = [
    {
        "name": "USEast2",
        "address": "52.87.248.5"
    },
    {
        "name": "EUEast",
        "address": "18.184.218.174"
    },
    {
        "name": "EUSouthWest",
        "address": "35.180.67.120"
    },
    {
        "name": "EUNorth",
        "address": "18.159.133.120"
    },
    {
        "name": "USEast",
        "address": "54.234.226.24"
    },
    {
        "name": "USWest4",
        "address": "54.235.235.140"
    },
    {
        "name": "EUWest2",
        "address": "52.16.86.215"
    },
    {
        "name": "Asia",
        "address": "3.0.147.127"
    },
    {
        "name": "USSouth3",
        "address": "52.207.206.31"
    },
    {
        "name": "EUWest",
        "address": "15.237.60.223"
    },
    {
        "name": "USWest",
        "address": "54.86.47.176"
    },
    {
        "name": "USMidWest2",
        "address": "3.140.254.133"
    },
    {
        "name": "USMidWest",
        "address": "3.133.12.23"
    },
    {
        "name": "USSouth",
        "address": "3.82.126.16"
    },
    {
        "name": "USWest3",
        "address": "18.144.30.153"
    },
    {
        "name": "USSouthWest",
        "address": "54.153.13.68"
    },
    {
        "name": "USNorthWest",
        "address": "34.238.176.119"
    },
    {
        "name": "Australia",
        "address": "13.236.87.250"
    }
];

/**
 * Attempts to return an `IServer` object from the search string.
 * @param serverName The server's full name or an an alias (e.g. `USWest3` or `usw3`). Case insensitive
 */
export function ParseServerName(serverName: string): IServer | undefined {
    for (const server of Servers) {
        // If full servername is provided (e.g. "USWest3")
        if (server.name.toLowerCase() == serverName.toLowerCase()) {
            return server;
        }

        // Try aliases
        const pattern = /[A-Z0-9]+/; // Capture capital letters and numbers. USWest3 -> ["USW", "3"]
        const alias = serverName.match(pattern)?.join("");
        if (alias?.toLowerCase() == serverName.toLowerCase()) {
            return server;
        }
    }
    return undefined;
}