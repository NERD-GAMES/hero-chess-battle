import { useState } from 'react'
import { heroes } from '../../mock/heroesdb'
import { HERO_MOVE, HERO_RARITY, IHero } from '../../@types/IHero'
import { HeroCard } from '../../components/heroCard'
import {
  Avatar,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import { AddOrEditModal } from '../../components/addOrEditModal'
import { Title } from '../../components/title'
import { HeroCardPhoto } from '../../components/heroCardPhoto'

const sumPercent = (value: number, percent: number) => {
  const newValue = Number(value)
  const min = -0.1
  const max = 0.1
  percent += Math.random() * (max - min) + min
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
  const [open, setOpen] = useState(false)
  const [visualTable, setVisualTable] = useState(true)

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
        attack: sumPercent(hero.attack, 0),
        defender: sumPercent(hero.defender, 0),
        value: sumPercent(hero.value, 0),
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
        value: sumPercent(hero.value, 0.2),
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
        value: sumPercent(hero.value, 0.4),
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
        value: sumPercent(hero.value, 0.6),
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
        value: sumPercent(hero.value, 0.8),
        id: new Date().getTime().toString(),
      })
    }
    setHeroesList([...heroesList, ...newsHeroes])
    setOpen(false)
  }

  return (
    <div>
      <Title
        title="Nossos Heróis"
        actionsRight={
          <>
            <Button onClick={() => setVisualTable(!visualTable)}>
              Visualizar em {visualTable ? 'Cards' : 'Tabela'}
            </Button>
            <Button variant="contained" onClick={() => setOpen(true)}>
              Produzir novos heróis
            </Button>
          </>
        }
      />

      <div style={{ marginTop: 10 }}>
        {visualTable && (
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Valor</TableCell>
                <TableCell>Ataque</TableCell>
                <TableCell>Defesa</TableCell>
                <TableCell>Movimento</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {heroesList.map((hero) => {
                return (
                  <TableRow key={hero.id}>
                    <TableCell>
                      <HeroCardPhoto hero={hero} multiple={0.25} />
                    </TableCell>
                    <TableCell>
                      #{hero.id} {hero.name}
                    </TableCell>
                    <TableCell>
                      {hero.coin} {hero.value}
                    </TableCell>
                    <TableCell>{hero.attack}</TableCell>
                    <TableCell>{hero.defender}</TableCell>
                    <TableCell>{hero.move}</TableCell>
                    <TableCell>{hero.status}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        )}

        {!visualTable && (
          <Grid container spacing={1}>
            {heroesList.map((hero) => (
              <Grid item key={hero.id}>
                <HeroCard hero={hero} />
                <div style={{ textAlign: 'center' }}>
                  <div>
                    Valor: {hero.coin} {hero.value}
                  </div>
                  <div>Status: {hero.status}</div>
                  {hero.owner && (
                    <div>
                      Dono: {hero.owner?.name} ({hero.owner?.id})
                    </div>
                  )}
                </div>
              </Grid>
            ))}
          </Grid>
        )}
      </div>

      {open && <AddOrEditModal onSave={onSave} onHide={() => setOpen(false)} />}
    </div>
  )
}
