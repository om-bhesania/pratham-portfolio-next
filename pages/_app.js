import { TranslationProvider } from '../components/translations/transProvider'
import '../styles/globals.css'

import Layout from './layout'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TranslationProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TranslationProvider>
    </QueryClientProvider>
  )
}
