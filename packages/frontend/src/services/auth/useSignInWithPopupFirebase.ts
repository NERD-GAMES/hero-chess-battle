import { useEffect, useState } from 'react'
import { IUser } from '../../@types/IUser'
import { firebase } from '../firebase'

type IProps = {
  initialUser: IUser
}

export const useSignInWithPopupFirebase = ({ initialUser }: IProps) => {
  const [user, setUser] = useState<IUser>(initialUser)

  const setUserParser = (userFirebase: firebase.User) => {
    setUser({
      displayName: userFirebase.displayName,
      photoURL: userFirebase.photoURL,
      isLogged: userFirebase.uid ? true : false,
    })
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userFirebase) => {
      if (userFirebase) {
        setUserParser(userFirebase)
      } else {
        setUser(initialUser)
      }
    })
  }, [])

  const onGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const response = await firebase.auth().signInWithPopup(provider)
    const userFirebase = response.user
    setUserParser(userFirebase)
  }

  const onSignOut = async () => {
    await firebase.auth().signOut()
  }

  return { user, onGoogleSignIn, onSignOut }
}
