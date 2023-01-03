import { useState } from 'react'
import { heroes } from '../../mock/heroesdb'
import { HERO_MOVE, HERO_RARITY, IHero } from '../../@types/IHero'
import { HeroCard } from '../../components/heroCard'
import { Button, Grid } from '@mui/material'
import { AddOrEditModal } from '../../components/addOrEditModal'

const sumPercent = (value: number, percent: number) => {
  const newValue = Number(value)
  return Math.floor(newValue + newValue * percent)
}

const moveList = Object.keys(HERO_MOVE)
const max = moveList.length
const min = 0

const getMoveRandom = () => {
  const random = Math.floor(Math.random() * (max - min + 1) + min)
  return (HERO_MOVE[moveList[random]] || HERO_MOVE.Pawn) as HERO_MOVE
}

export default () => {
  const [heroesList, setHeroesList] = useState(heroes)
  const [open, setOpen] = useState(true)

  const onSave = (hero: IHero, copies: number) => {
    const copiesSL = Math.ceil(copies * 0.01)
    const copiesL = Math.ceil(copies * 0.03)
    const copiesSR = Math.ceil(copies * 0.1)
    const copiesR = Math.ceil(copies * 0.2)
    const copiesC = Math.ceil(copies * 0.66)
    const newsHeroes: IHero[] = []
    for (let index = 0; index < copiesC; index++) {
      newsHeroes.push({
        ...hero,
        rarity: HERO_RARITY.Common,
        move: getMoveRandom(),
        id: new Date().getTime().toString(),
      })
    }
    for (let index = 0; index < copiesR; index++) {
      newsHeroes.push({
        ...hero,
        rarity: HERO_RARITY.Rare,
        move: getMoveRandom(),
        attack: sumPercent(hero.attack, 0.2),
        defender: sumPercent(hero.defender, 0.2),
        id: new Date().getTime().toString(),
      })
    }
    for (let index = 0; index < copiesSR; index++) {
      newsHeroes.push({
        ...hero,
        rarity: HERO_RARITY.SuperRare,
        move: getMoveRandom(),
        attack: sumPercent(hero.attack, 0.4),
        defender: sumPercent(hero.defender, 0.4),
        id: new Date().getTime().toString(),
      })
    }
    for (let index = 0; index < copiesL; index++) {
      newsHeroes.push({
        ...hero,
        rarity: HERO_RARITY.Legend,
        move: getMoveRandom(),
        attack: sumPercent(hero.attack, 0.6),
        defender: sumPercent(hero.defender, 0.6),
        id: new Date().getTime().toString(),
      })
    }
    for (let index = 0; index < copiesSL; index++) {
      newsHeroes.push({
        ...hero,
        rarity: HERO_RARITY.SPLegend,
        move: getMoveRandom(),
        attack: sumPercent(hero.attack, 0.8),
        defender: sumPercent(hero.defender, 0.8),
        id: new Date().getTime().toString(),
      })
    }
    setHeroesList([...heroesList, ...newsHeroes])
    setOpen(false)
  }

  return (
    <div>
      <h1>Admin</h1>
      <Button onClick={() => setOpen(true)}>Adicionar</Button>
      <Grid container spacing={1}>
        {heroesList.map((hero) => (
          <Grid item key={hero.id}>
            <HeroCard hero={hero} />
            <div style={{ textAlign: 'center' }}>
              <div>
                Valor: {hero.coin} {hero.value}
              </div>
              <div>
                Dono: {hero.owner?.name} ({hero.owner?.id})
              </div>
            </div>
          </Grid>
        ))}
      </Grid>

      {open && <AddOrEditModal onSave={onSave} onHide={() => setOpen(false)} />}
    </div>
  )
}
