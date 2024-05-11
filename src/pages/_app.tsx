import theme from '@/styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/figtree/500.css'
import '@fontsource/figtree/800.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
