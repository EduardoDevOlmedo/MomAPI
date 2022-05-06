import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PhraseProvider from '../context/PhraseProvider'
import React from "react"

interface IProps {
  Component: typeof React.Component;
  pageProps: any;
}

function MyApp({ Component, pageProps }: IProps): JSX.Element {
  return (
    <PhraseProvider>
      <Component {...pageProps} />
    </PhraseProvider>
  )
}

export default MyApp
