import styles from './Logo.module.css'
export default function Logo() {
    return (
        <div className={styles.container}>
            <div className='flex flex-col m-auto w-[360px]'>
                <div className={styles.oLogo}>
                    <div className={`${styles.heart1} ${styles.alinha1}`}></div>
                    <div className={`${styles.heart2} ${styles.alinha2}`}></div>
                    <div className={`${styles.heart3} ${styles.alinha3}`}></div>
                    <div className={`${styles.heart4} ${styles.alinha4}`}></div>
                </div>
                <div className={styles.informacao}>
                <h2 className='text-center font-bold text-2xl text-green-600'>MEGA DE HOJE</h2>
                <p className='text-center'>Resultados da Mega-Sena e Loterias Nacional</p>
                </div>
            </div>
            
        </div>
    )
};
