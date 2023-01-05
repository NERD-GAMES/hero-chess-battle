import { css } from "@emotion/react"
import { HeroCardPhoto } from "../../components/heroCardPhoto"
import { heroes } from "../../mock/heroesdb"

export async function getServerSideProps(context) {
  return {
    props: { id: context.params.id }, // will be passed to the page component as props
  }
}

export default (props) => {
  const rows = [
    [{}, { heroId: 2 }, {heroId: 5}, {}, {}],
    [{ heroId: 1 }, {}, {}, {}, {}],
    [{}, {}, { heroId: 2 }, {}, { heroId: 2 }],
    [{ heroId: 3 }, { heroId: 2 }, {}, {}, {heroId: 2}],
    [{}, {}, {heroId: 2}, {}, {}],
    [{ heroId: 1 }, {}, {}, {}, {}],
  ]

  const renderCell = (heroId) => {
    if (!heroId) return null
    const hero = heroes.find(x => x.id == heroId)
    return <HeroCardPhoto hero={hero} multiple={0.25} />
  }

  return (
    <div>
      <table border={1}
        css={css`
          background-image: url(https://static.vecteezy.com/ti/vetor-gratis/p1/2495583-paisagem-de-montanhas-e-sol-no-fundo-verde-design-vetor.jpg);
          td {
            min-width: 50px;
            min-height: 50px;
            margin: 0;
            padding: 0;
            line-height: 0;
          }
      `}>
        <tbody>
          {rows.map((row, rowIDX) => {
            return (
              <tr key={rowIDX}>
                {row.map((col, colIDX) => {
                  return (
                    <td key={`${rowIDX}-${colIDX}`}>
                      {renderCell(col?.heroId)}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
