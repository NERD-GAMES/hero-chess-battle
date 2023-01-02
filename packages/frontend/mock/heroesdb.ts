enum HERO_MOVE {
    Pawn,
    Tower,
    Queen,
    Bishop,
    Horse,
  }
  
  enum HERO_TYPE {
    Hero,
    Trap,
    Effect,
  }
  
  enum HERO_COIN {
    HeroCoin,
    Dollar,
    Real,
  }
  
  enum HERO_RARITY {
    Common,
    Rare,
    SuperRare,
    Epic,
    Legend,
    SPLegend,
  }
  
export const heroes = [
    {
      id: 1,
      name: 'Sharp Dog',
      attack: 2000,
      defender: 1500,
      type: HERO_TYPE.Hero,
      move: HERO_MOVE.Pawn,
      rarity: HERO_RARITY.SuperRare,
      value: 2458,
      coin: HERO_COIN.Dollar,
      avatar: [
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdsINzUAN21PwrIiV3A6WY9N4i4WspwB8WQ&usqp=CAU',
          style: {},
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAG0qvjFupIRGWlIxLgpdPVvSxn0UBzFwYQ&usqp=CAU',
          style: {},
        },
      ],
    },
  
    {
      id: 2,
      name: 'Zeus Dog',
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
          style: {},
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAG0qvjFupIRGWlIxLgpdPVvSxn0UBzFwYQ&usqp=CAU',
          style: {},
        },
      ],
    },
  ]