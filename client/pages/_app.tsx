import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import Head from 'next/head'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'


export default function App(props: AppProps) {
  const { Component, pageProps } = props
  // { Component, pageProps }: AppProps
  return (
    <>
      <Head>
        <title>Teebay</title>
        <meta
          name="description"
          content="Product sell/buy/rent/borrow application"
        />
        <meta name="viewport" content="width=device-width initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MantineProvider
        theme={{
          colorScheme: 'light',
          fontFamily:
            'Open Sans, Ubuntu Monospace, Roboto Mono, Menlo, Segoe UI Mono',
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <ModalsProvider>
          <Notifications position="top-right" zIndex={2077} autoClose={4000} />
          <Component {...pageProps} />
        </ModalsProvider>
      </MantineProvider>
    </>
  ) 
}
