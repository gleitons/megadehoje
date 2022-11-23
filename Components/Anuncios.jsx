import styles from '../styles/Anuncio.module.css'
export default function Anuncios() {
    return (
        <>
            <p>Anuncios</p>
            <div className={styles.anuncio600x300}>
                anuncio 600x300
            </div>
            <div className={styles.anuncio300x250}>
                anuncio 300x250
            </div>

        </>
    )
}