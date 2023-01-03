import Head from 'next/head'
import { theme } from '../utils/theme'
import './styles.css'
import { AppProps } from 'next/app'

import { ThemeProvider, Container } from '@mui/material'
import createEmotionCache from '../utils/createEmotionCache'
import { CacheProvider, EmotionCache } from '@emotion/react'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

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
