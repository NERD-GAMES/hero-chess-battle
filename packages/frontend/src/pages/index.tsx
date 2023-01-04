import { Button } from '@mui/material'
import { useUserContext } from '../@context/userContext'

export default () => {
  const { user, onGoogleSignIn } = useUserContext()

  return (
    <div>
      <h1>Hero Chess Battle</h1>
      <h2>{user?.displayName}</h2>

      {user?.photoURL && <img src={user.photoURL} alt={user.displayName} />}
      {!user?.isLogged && (
        <Button onClick={onGoogleSignIn}>Entrar com Google</Button>
      )}
    </div>
  )
}
