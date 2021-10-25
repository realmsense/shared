import { APIUser, RESTPostOAuth2AccessTokenResult } from "discord-api-types/v9";

export interface IDiscordLink extends RESTPostOAuth2AccessTokenResult {
    userId: APIUser["id"];
}
