import { createContext, ReactNode, useContext } from 'react'
import { useSignInWithPopupFirebase } from '../services/auth/useSignInWithPopupFirebase'
import { IUser } from '../@types/IUser'

export type UserContextValue = {
  user: IUser
  onGoogleSignIn: () => void
  onSignOut: () => void
}

const initialUser: IUser = {
  displayName: 'Deslogado',
  photoURL: '',
  isLogged: false,
}

const UserContext = createContext<UserContextValue>({
  onGoogleSignIn: () => null,
  onSignOut: () => null,
  user: initialUser,
})

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { user, onGoogleSignIn, onSignOut } = useSignInWithPopupFirebase({
    initialUser,
  })
  return (
    <UserContext.Provider value={{ user, onGoogleSignIn, onSignOut }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = (): UserContextValue => useContext(UserContext)
