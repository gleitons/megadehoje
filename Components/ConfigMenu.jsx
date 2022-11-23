import Menutop from "./MenuTop"
import Footer from "./Footer"
import styles from '../styles/Body.module.css'


export default function ConfigMenu({children}) {
    return (
        <>
        <Menutop />
        <div className = {styles.maxDimensao}> {children}</div>
        <Footer />
        </>
    )
}