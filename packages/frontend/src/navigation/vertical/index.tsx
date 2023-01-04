// ** Icon imports
import {
  Login,
  HomeOutline,
  ListStatus,
} from 'mdi-material-ui'

// ** Type import
import { VerticalNavItemsType } from '../../@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Lobby',
      icon: HomeOutline,
      path: '/',
    },
    {
      sectionTitle: 'Configuração',
    },
    {
      title: 'Meus Decks',
      icon: Login,
      path: '/decks',
    },
    {
      title: 'Loja',
      icon: HomeOutline,
      path: '/store',
    },
    {
      title: 'Minha conta',
      icon: HomeOutline,
      path: '/account',
    },
    {
      title: 'Admin',
      icon: ListStatus,
      path: '/admin',
    },
  ]
}

export default navigation
