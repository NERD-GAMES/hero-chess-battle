import { heroes } from "../../mock/heroesdb"
import { HeroCard } from "../../components/heroCard"

export default () => {
  return (
    <div>
      <h1>Admin</h1>
      {heroes.map((hero) => (
        <HeroCard hero={hero} />
      ))}
      <a href="/lobby">Lobby</a>
    </div>
  )
}
