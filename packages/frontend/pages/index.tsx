import { Button } from '@mui/material'
import Link from 'next/link'
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { auth } from '../services/firebase'
import { useState } from 'react'

export default () => {
  const [user, setUser] = useState<User>({} as User)

  const onGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    const response = await signInWithPopup(auth, provider)
    setUser(response.user)
  }

  return (
    <div>
      <h1>Hero Chess Battle</h1>
      <Link href="/lobby">Partidas Online</Link>
      <Link href="/admin">Admin</Link>

      <h2>{user.displayName}</h2>

      {user.photoURL && <img src={user.photoURL} alt={user.displayName} />}
      {!user.uid && <Button onClick={onGoogleSignIn}>Entrar com Google</Button>}
    </div>
  )
}
