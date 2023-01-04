// ** Icon imports
import {
  Login,
  Table,
  CubeOutline,
  HomeOutline,
  FormatLetterCase,
  AccountCogOutline,
  CreditCardOutline,
  AccountPlusOutline,
  AlertCircleOutline,
  GoogleCirclesExtended,
  ListStatus,
} from 'mdi-material-ui'

// ** Type import
import { VerticalNavItemsType } from '../../@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: <HomeOutline />,
      path: '/',
    },
    {
      title: 'Faturas',
      icon: <ListStatus />,
      path: '/faturas',
    },
    {
      sectionTitle: 'Configuração',
    },
    {
      title: 'Usuarios',
      icon: <Login />,
      path: '/usuarios',
    },
    {
      title: 'Empresas',
      icon: <HomeOutline />,
      path: '/empresas',
    },
    {
      title: 'Impostos',
      icon: <HomeOutline />,
      path: '/impostos',
    },
    {
      title: 'Certificado',
      icon: <HomeOutline />,
      path: '/certificado',
    },
    {
      sectionTitle: 'Exemplos',
    },
    {
      title: 'Dashboard',
      icon: <HomeOutline />,
      path: '/out/dashboard',
    },
    {
      sectionTitle: 'Pages',
    },
    {
      title: 'Login',
      icon: <Login />,
      path: '/pages/login',
      openInNewTab: true,
    },
    {
      title: 'Register',
      icon: <AccountPlusOutline />,
      path: '/pages/register',
      openInNewTab: true,
    },
    {
      title: 'Error',
      icon: <AlertCircleOutline />,
      path: '/pages/error',
      openInNewTab: true,
    },
    {
      sectionTitle: 'User Interface',
    },
    {
      title: 'Typography',
      icon: <FormatLetterCase />,
      path: '/typography',
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: <GoogleCirclesExtended />,
    },
    {
      title: 'Cards',
      icon: <CreditCardOutline />,
      path: '/cards',
    },
    {
      title: 'Tables',
      icon: <Table />,
      path: '/tables',
    },
    {
      icon: <CubeOutline />,
      title: 'Form Layouts',
      path: '/form-layouts',
    },
  ]
}

export default navigation
