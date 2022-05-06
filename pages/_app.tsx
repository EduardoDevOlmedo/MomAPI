import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PhraseProvider from '../context/PhraseProvider'
import React from "react"
import { SnackbarProvider } from 'notistack';

interface IProps {
  Component: typeof React.Component;
  pageProps: any;
}

function MyApp({ Component, pageProps }: IProps): JSX.Element {
  return (
    <SnackbarProvider maxSnack={3}>
    <PhraseProvider>
      <Component {...pageProps} />
    </PhraseProvider>
    </SnackbarProvider>
  )
}

export default MyApp
