import { Chip, Divider, Paper, Typography } from '@mui/material'
import { css } from '@emotion/react'
import 'animate.css'
import { IHero } from '../@types/IHero'

interface IProps {
  hero: IHero
}

const dictionaryMove = {
  P: 'Peão',
  T: 'Torre',
  H: 'Cavalo',
  B: 'Bispo',
  Q: 'Rainha',
  K: 'Rei',
}

export const HeroCard = ({ hero }: IProps) => {
  return (
    <Paper
      css={css`
        border-radius: 20px;
        border: 4px solid gray;
        padding: 5px;
        width: 200px;
        &:hover {
          border-color: blue;
        }
      `}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: 40,
        }}
      >
        <Typography sx={{ flex: 1, fontSize: 14 }}>{hero.name}</Typography>
        <Chip size="small" label={hero.rarity} />
        <Typography>{dictionaryMove[hero.move]}</Typography>
      </div>
      <div
        css={css`
          position: relative;
          height: 200px;
          border-radius: 20px;
          border: 2px solid gray;
          &:hover {
            border-color: blue;
          }
        `}
      >
        {hero.avatar.map((a, idx) => {
          let animates = ''
          if (a.animates?.length > 0) {
            animates = 'animate__animated '
            animates += a.animates.map((an) => 'animate__' + an).join(' ')
          }

          return (
            <picture key={hero.id + a.img}>
              <img
                className={animates}
                src={a.img}
                style={{
                  ...a.style,
                  position: 'absolute',
                  maxWidth: 200,
                  maxHeight: 200,
                }}
                alt=""
              />
            </picture>
          )
        })}
      </div>
      <Typography
        css={css`
          height: 50px;
          padding: 5px;
          font-size: 10px;
          &:hover {
            border-color: blue;
          }
        `}
      >
        {hero.description}
      </Typography>
      <Divider />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="button">ATK:{hero.attack}</Typography>
        <Typography variant="button">DEF:{hero.defender}</Typography>
      </div>
    </Paper>
  )
}
