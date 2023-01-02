import Head from 'next/head';
import { theme } from '../utils/theme'
import './styles.css'

import { ThemeProvider, Container } from '@mui/material'
import createEmotionCache from '../utils/createEmotionCache'
import { CacheProvider } from '@emotion/react'

const clientSideEmotionCache = createEmotionCache()

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <>
      <Head>
        <title>Hero Chess Battle</title>
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <Container>
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}

export default MyApp
