import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Foot from './foot'
import 'bootstrap/dist/css/bootstrap.css'
 

export default function App({ Component, pageProps }) {
  return <>
          <Navbar/>
          <Component {...pageProps} />
          <Foot/>
         </>
}  
