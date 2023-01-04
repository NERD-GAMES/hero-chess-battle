import { heroes } from '../../mock/heroesdb'
import { HeroCard } from '../../components/heroCard'
import { Button, Grid } from '@mui/material'

const dictionaryCoin = {
  '0': 'HC',
  '1': '$',
  '2': 'R$',
}

export default () => {
  return (
    <div>
      <h1>Loja</h1>
      <Grid container spacing={1}>
        {heroes.map((hero) => (
          <Grid item key={hero.id}>
            <HeroCard hero={hero} />
            <div
              style={{ display: 'flex', justifyContent: 'center', padding: 5 }}
            >
              <Button variant="contained">
                Comprar: {dictionaryCoin[hero.coin]} {hero.value}
              </Button>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
