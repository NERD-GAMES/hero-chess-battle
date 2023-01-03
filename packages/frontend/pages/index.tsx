import Link from "next/link"

export default ()=>{
  return (
      <div>
          <h1>Home</h1>
          <Link href="/lobby">Partidas Online</Link>
          <Link href="/admin">Admin</Link>
      </div>
  )
}