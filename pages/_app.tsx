import { AppProps, NextWebVitalsMetric } from 'next/app'
import 'semantic-ui-css/semantic.min.css'
import '../global.css'

import CartProvider from '@store/Cart'

//export const reportWebVitals = (metric: NextWebVitalsMetric) => {
// analu¡ytic
//}

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
