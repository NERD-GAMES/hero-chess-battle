import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Grid,
  MenuItem,
  TextField,
} from '@mui/material'
import { useState } from 'react'
import {
  HERO_COIN,
  HERO_MOVE,
  HERO_RARITY,
  HERO_TYPE,
  IHero,
} from '../@types/IHero'
import { fileUploader } from '../services/storage/fileUploader'
import { HeroCard } from './heroCard'

const INITIAL_HERO: IHero = {
  id: '',
  name: '',
  description: ``,
  attack: 10,
  defender: 10,
  type: HERO_TYPE.Hero,
  move: HERO_MOVE.Pawn,
  rarity: HERO_RARITY.Common,
  value: 100,
  coin: HERO_COIN.HeroCoin,
  avatar: [],
}

const rarityList = (
  Object.keys(HERO_RARITY) as Array<keyof typeof HERO_RARITY>
).map((r) => {
  return {
    id: HERO_RARITY[r],
    label: r,
  }
})

const coinList = (Object.keys(HERO_COIN) as Array<keyof typeof HERO_COIN>).map(
  (r) => {
    return {
      id: HERO_COIN[r],
      label: r,
    }
  },
)

const moveList = (Object.keys(HERO_MOVE) as Array<keyof typeof HERO_MOVE>).map(
  (r) => {
    return {
      id: HERO_MOVE[r],
      label: r,
    }
  },
)

export const AddOrEditModal = ({ onHide, onSave }) => {
  const [hero, setHero] = useState<IHero>(INITIAL_HERO)
  const [copies, setCopies] = useState(100)

  const handleChange = (e) => {
    setHero({ ...hero, [e.target.name]: e.target.value })
  }

  const handleChangeFile = async (e) => {
    const files = e.target.files
    if (!files?.length) return

    const onComplete = (img) => {
      const avatar = [...hero.avatar, { img }]
      setHero({ ...hero, avatar })
    }

    const onProgress = (e) => {
      console.log(e)
    }

    for (let index = 0; index < files.length; index++) {
      const file = files[index]
      await fileUploader(file, 'sem_id', onProgress, console.error, onComplete)
    }
  }

  return (
    <Dialog open onClose={() => onHide(false)} maxWidth="md" fullWidth>
      <DialogTitle>Adicionando um novo herói</DialogTitle>
      <DialogContent>
        <Grid container spacing={1} sx={{ mt: 1 }}>
          <Grid item xs>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Nome do Herói"
                  onChange={handleChange}
                  name="name"
                  value={hero.name}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  select
                  fullWidth
                  label="Raridade"
                  onChange={handleChange}
                  name="rarity"
                  value={hero.rarity}
                >
                  {rarityList.map((rarity) => (
                    <MenuItem key={rarity.id} value={rarity.id}>
                      {rarity.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Poder de ataque"
                  type="number"
                  onChange={handleChange}
                  name="attack"
                  value={hero.attack}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Poder de defesa"
                  type="number"
                  onChange={handleChange}
                  name="defender"
                  value={hero.defender}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Descrição"
                  onChange={handleChange}
                  name="description"
                  value={hero.description}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  select
                  fullWidth
                  label="Movimento"
                  onChange={handleChange}
                  name="move"
                  value={hero.move}
                >
                  {moveList.map((move) => (
                    <MenuItem key={move.id} value={move.id}>
                      {move.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  select
                  fullWidth
                  label="Moeda"
                  onChange={handleChange}
                  name="coin"
                  value={hero.coin}
                >
                  {coinList.map((coin) => (
                    <MenuItem key={coin.id} value={coin.id}>
                      {coin.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Valor"
                  onChange={handleChange}
                  name="value"
                  value={hero.value}
                />
              </Grid>
              <Grid item>
                <label htmlFor={`imput`}>
                  <input
                    id={`imput`}
                    type="file"
                    multiple={false}
                    onChange={handleChangeFile}
                  />
                  <Fab
                    variant="extended"
                    size="small"
                    aria-label="upload picture"
                    component="span"
                  >
                    {/* <AddPhotoAlternateIcon fontSize="large" /> */}
                    Adicionar
                  </Fab>
                </label>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <HeroCard hero={hero} />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  label="Cópias"
                  type="number"
                  onChange={(e) => setCopies(Number(e.target.value))}
                  value={copies}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={() => onSave(hero, copies)}>
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
