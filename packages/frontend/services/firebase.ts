import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCdwbDAsGKQ6ji7CrEbwx_Z7CV6Ccz4AO0',
  authDomain: 'nerd-games.firebaseapp.com',
  projectId: 'nerd-games',
  storageBucket: 'nerd-games.appspot.com',
  messagingSenderId: '1064259606654',
  appId: '1:1064259606654:web:48cee652da9d44d6ac602f',
  measurementId: 'G-7EBMK1R3Z1',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
