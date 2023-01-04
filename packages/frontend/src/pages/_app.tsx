// ** Next Imports
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import { Router } from 'next/router'
import type { AppProps } from 'next/app'

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'

// ** Config Imports
import themeConfig from '../configs/themeConfig'

// ** Component Imports
import UserLayout from '../layouts/UserLayout'
import ThemeComponent from '../@core/theme/ThemeComponent'

// ** Contexts
import { SettingsConsumer, SettingsProvider } from '../@context/settingsContext'

// ** Utils Imports
import { createEmotionCache } from '../@core/utils/create-emotion-cache'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'
import { UserProvider } from '../@context/userContext'

// ** Global css styles
import '../styles/globals.css'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  Component: any
  emotionCache?: EmotionCache
}

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const getLayout =
    Component.getLayout ?? ((page) => <UserLayout>{page}</UserLayout>)

  return (
    <>
      <Head>
        <title>Hero Chess Battle</title>
        <meta
          name="description"
          content={`${themeConfig.templateName} – Billing`}
        />
        <meta name="keywords" content="Hero Chess Battle" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CacheProvider value={emotionCache}>
        <UserProvider>
          <SettingsProvider>
            <SettingsConsumer>
              {({ settings }) => {
                return (
                  <ThemeComponent settings={settings}>
                    {getLayout(<Component {...pageProps} />)}
                  </ThemeComponent>
                )
              }}
            </SettingsConsumer>
          </SettingsProvider>
        </UserProvider>
      </CacheProvider>
      <Analytics />
    </>
  )
}
