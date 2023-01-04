import { useEffect, useState } from 'react'
import { firebase } from '../firebase'

type UserType = {
  displayName: string
  photoURL: string
  uid: string
}

export const useSignInWithPopupGoogle = () => {
  const [user, setUser] = useState<UserType>(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  }, [])

  const onGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const response = await firebase.auth().signInWithPopup(provider)
    const _user = response.user
    setUser({
      displayName: _user.displayName,
      photoURL: _user.photoURL,
      uid: _user.uid,
    })
  }

  return { user, onGoogleSignIn }
}
