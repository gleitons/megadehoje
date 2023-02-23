import styles from '../styles/Body.module.css'

export default function LogoCss() {
    return (
       <div className={styles.logoCompleto}>
        <div className={styles.logodoMega}>
            <div className={styles.posicaoOne}>
                <div className={styles.coracaoTrevo}>
                </div>
            </div>
            <div className={styles.posicaoTwo}>
                <div className={styles.coracaoTrevoOne}>
                </div>
            </div>
            <div className={styles.posicaoTree}>
                <div className={styles.coracaoTrevoTwo}>
                </div>
            </div>
            <div className={styles.posicaoFour}>
                <div className={styles.coracaoTrevoTree}>
                </div>
            </div>
        </div>
        <div className={styles.textoLogo}>
            <h2>MEGA DE HOJE</h2>
            <p>Resultados da mega sena <br />e loteria Nacional</p>
        </div>
       
       </div>
        
        
    )
}