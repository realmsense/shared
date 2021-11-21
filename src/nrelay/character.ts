import { IServer } from "..";

export interface ICharacter {
    objectType: number;
    updatedTime: Date;
    server: IServer;
    location: string;
    
    level: number;
    exp: number;
    nextLevelExp: number;
    nextClassQuestFame: number;
    xpBoosted: number;
    xpTimer: number;
    lootDropTimer: number;
    lootTierTimer: number;

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
    backpack: number[];
    hasBackpack: boolean;

    // Sprite
    size: number;
    texture: number;
    tex1: number;
    tex2: number;
}