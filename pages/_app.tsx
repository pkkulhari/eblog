import type { AppProps } from 'next/app'
import LayoutWrapper from '../components/LayoutWrapper'
import '@arco-design/web-react/dist/css/arco.css'
import '../styles/globles.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  )
}
