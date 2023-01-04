export async function getServerSideProps(context) {
    return {
      props: {id:context.params.id}, // will be passed to the page component as props
    }
  }

export default (props)=>{
    return (
        <div>
            <h1>Editar Deck {props?.id}</h1>
            <button>Adicionar Herói</button>
            <button>Remover Herói</button>
            <a href="/decks">Meuss Decks</a>
        </div>
    )
}