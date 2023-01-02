export const HeroCard = ({ hero }) => {
    return (
      <div style={{ backgroundColor: 'blue', padding: 10, margin: 10 }}>
        <p>{hero.name}</p>
        <img src={hero.avatar[0].img}/>
        <p>ATK:{hero.attack}</p>
        <p>DEF:{hero.defender}</p>
      </div>
    )
  }