import { IEntity, GuildRank } from "..";

export interface IPlayer extends IEntity {
    // Account Data
    name: string;
    nameChosen: boolean;
    accountID: string;
    playerID: number;
    supporter: boolean;
    supporterPoints: number;
    numStars: number;
    accountFame: number;
    credits: number;
    fortuneToken: number;
    currentFame: number;
    legendaryRank: number;
    forgeFire: number;
    _119: number; // blueprints possibly?
    
    // XP
    level: number;
    exp: number;
    nextLevelExp: number;
    nextClassQuestFame: number;
    xpBoosted: number;
    xpTimer: number;
    lootDropTimer: number;
    lootTierTimer: number;
    
    // Guild
    guildName: string;
    guildRank: GuildRank;
    
    // Stats
    maxHP: number;
    hp: number;
    maxMP: number;
    mp: number;
    dexterity: number;
    attack: number;
    defense: number;
    vitality: number;
    wisdom: number;
    speed: number;
    
    // Stats - boost
    boostMaxMP: number;
    boostMaxHP: number;
    boostDexterity: number;
    boostAttack: number;
    boostDefense: number;
    boostSpeed: number;
    boostVitality: number;
    boostWisdom: number;
    projectileSpeed: number;
    projectileLife: number;
    
    // Stats - exalts
    exaltedBonusDamage: number;
    exaltedHP: number;
    exaltedMP: number;
    exaltedDexterity: number;
    exaltedAttack: number;
    exaltedDefense: number;
    exaltedSpeed: number;
    exaltedVitality: number;
    exaltedWisdom: number;
    
    // Inventory
    potions: number[];
    inventory: number[];
    hasBackpack: boolean;
    backpack: number[];
    
    // Sprite
    size: number;
    texture: number;
    tex1: number;
    tex2: number;
}