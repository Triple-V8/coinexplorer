import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import store from '@/ReduxStore/FavouritesSlice'
import { Provider } from 'react-redux'
import '@/styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

    </ChakraProvider>
  )
}
