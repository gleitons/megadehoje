import '../styles/globals.css'
import ConfigMenu from '../Components/ConfigMenu'

function MyApp({ Component, pageProps }) {
  return <ConfigMenu>
    <Component {...pageProps} />
  </ConfigMenu>
  
}

export default MyApp
