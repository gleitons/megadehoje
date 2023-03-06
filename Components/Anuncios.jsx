import styles from '../styles/Anuncio.module.css'
import Image from 'next/image'
import asConstrutora from '../public/img/as-construtora-lagoa-dos-patos-mg.jpeg'
export default function Anuncios() {
    return (
        <>
            {/* <p>Anuncios</p> */}
            <div className={styles.anuncio600x300}>
            <Image src={asConstrutora} alt="AS Construtora" />
               
            </div>
            <div className={styles.anuncio300x250}>
           
                anuncio 300x250
            </div>

        </>
    )
}