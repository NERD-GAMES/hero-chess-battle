export enum HERO_MOVE {
  Pawn = "P",
  Tower = "T",
  Horse = "H",
  Bishop = "B",
  Queen = "Q",
  King = "K"
}

export enum HERO_TYPE {
  Hero,
  Trap,
  Effect,
}

export enum HERO_COIN {
  HeroCoin = "HC",
  Dollar = "$",
  Real = "R$",
}

export enum HERO_RARITY {
  Common = "C",
  Rare = "R",
  SuperRare = "SR",
  Epic = "E",
  Legend = "L",
  SPLegend = "SL",
}

interface IHeroAvatarStyle {
  left?: number
  width?: number 
  right?: number
  top?: number
}

interface IHeroAvatar {
  img: string
  animates?: string[]
  style?: IHeroAvatarStyle
}

interface INameId {
  id: string
  name: string
}

export interface IHero {
  id: string
  name: string
  description: string
  attack: number
  defender: number
  type: HERO_TYPE
  move: HERO_MOVE
  rarity: HERO_RARITY
  value: number
  owner?: INameId
  coin: HERO_COIN
  avatar: IHeroAvatar[]
}
