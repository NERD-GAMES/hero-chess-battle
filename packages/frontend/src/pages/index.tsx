import { Button } from '@mui/material'
import Link from 'next/link'
import { useSignInWithPopupGoogle } from '../services/auth/useSignInWithPopupGoogle'

export default () => {
  const { user, onGoogleSignIn } = useSignInWithPopupGoogle()

  return (
    <div>
      <h1>Hero Chess Battle</h1>
      <Link href="/lobby">Partidas Online</Link>
      <Link href="/admin">Admin</Link>

      <h2>{user?.displayName}</h2>

      {user?.photoURL && <img src={user.photoURL} alt={user.displayName} />}
      {!user?.uid && (
        <Button onClick={onGoogleSignIn}>Entrar com Google</Button>
      )}
    </div>
  )
}
