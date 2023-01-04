import {
  HERO_COIN,
  HERO_MOVE,
  HERO_RARITY,
  HERO_TYPE,
  IHero,
} from '../@types/IHero'

const sharp: IHero = {
  id: '1',
  name: 'Sharp Dog',
  description: `Um cachorro muito educado, mas nunca chegue perto sem avisa-lo`,
  owner: {
    id: '111',
    name: 'Gisele',
  },
  attack: 2000,
  defender: 1500,
  type: HERO_TYPE.Hero,
  move: HERO_MOVE.Pawn,
  rarity: HERO_RARITY.SuperRare,
  value: 2458,
  coin: HERO_COIN.Dollar,
  avatar: [
    {
      img: 'https://w7.pngwing.com/pngs/339/460/png-transparent-white-dog-dog-puppy-cartoon-dogs-white-cat-like-mammal-animals-thumbnail.png',
      style: { left: 28 },
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAG0qvjFupIRGWlIxLgpdPVvSxn0UBzFwYQ&usqp=CAU',
      style: { width: 50, right: 70 },
    },
  ],
}

const zeus: IHero = {
  id: '2',
  name: 'Zeus Dog',
  description: `Essa cachorrão da melho, mas é um brincalão`,
  owner: {
    id: '123',
    name: 'George',
  },
  attack: 200,
  defender: 1500,
  type: HERO_TYPE.Hero,
  move: HERO_MOVE.Pawn,
  rarity: HERO_RARITY.SuperRare,
  value: 258,
  coin: HERO_COIN.Dollar,
  avatar: [
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdsINzUAN21PwrIiV3A6WY9N4i4WspwB8WQ&usqp=CAU',
      style: { left: 20 },
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAG0qvjFupIRGWlIxLgpdPVvSxn0UBzFwYQ&usqp=CAU',
      animates: ['bounce', 'delay-1s', 'slower'],
      style: { width: 120, right: 50, top: -20 },
    },
  ],
}

const lupita: IHero = {
  id: '3',
  description: `Essa cachorrinha é o cão na terra.
  Ela ataca os seus oponentes irritando-os até a exaustão`,
  name: 'Lupita Dog Mourinho Pereira',
  owner: {
    id: '123',
    name: 'Edilaine',
  },
  attack: 200,
  defender: 1500,
  type: HERO_TYPE.Hero,
  move: HERO_MOVE.Queen,
  rarity: HERO_RARITY.SuperRare,
  value: 258,
  coin: HERO_COIN.HeroCoin,
  avatar: [
    {
      img: 'https://images.vexels.com/media/users/3/166684/isolated/preview/449da998c50322a7b7c677d4a86d50db-desenho-de-cachorro-fofo.png',
      style: {},
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAG0qvjFupIRGWlIxLgpdPVvSxn0UBzFwYQ&usqp=CAU',
      style: { width: 120, right: 70, top: -25 },
    },
  ],
}

export const heroes: IHero[] = [sharp, zeus, lupita]
