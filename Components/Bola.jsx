import styles from '../styles/Body.module.css'
import { useRouter } from "next/router";
export default function Bola({bol}) {
    return (
        <>
        <div className={styles.bolas}>
            {bol}
        </div>
        </>
    )
}